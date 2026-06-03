const crypto = require("crypto");
const net = require("net");
const tls = require("tls");

const ACCOUNT_KEY = "bybridge:accounts";

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing server environment variable: ${name}`);
  }
  return value;
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function signPayload(payload) {
  const secret = requiredEnv("AUTH_SECRET");
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

function createToken(user) {
  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = base64url(JSON.stringify({
    sub: user.username,
    role: user.role,
    name: user.name,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 8
  }));
  const signature = signPayload(`${header}.${payload}`);
  return `${header}.${payload}.${signature}`;
}

function verifyToken(token) {
  if (!token) return null;
  const [header, payload, signature] = token.split(".");
  if (!header || !payload || !signature) return null;
  const expected = signPayload(`${header}.${payload}`);
  if (Buffer.byteLength(signature) !== Buffer.byteLength(expected)) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
  return { username: data.sub, role: data.role, name: data.name };
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(String(password), salt, 100000, 32, "sha256").toString("hex");
  return `pbkdf2$${salt}$${hash}`;
}

function verifyPassword(password, stored) {
  const [, salt, expected] = String(stored || "").split("$");
  if (!salt || !expected) return false;
  const actual = hashPassword(password, salt).split("$")[2];
  return crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
}

async function redis(command) {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return redisRest(command);
  }
  if (process.env.REDIS_URL) {
    return redisUrl(command);
  }
  throw new Error("Missing Redis storage environment variable: set REDIS_URL or KV_REST_API_URL/KV_REST_API_TOKEN");
}

async function redisRest(command) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(data.error || "Storage request failed");
  }
  return data.result;
}

function encodeRedisCommand(command) {
  return `*${command.length}\r\n${command.map((part) => {
    const value = String(part);
    return `$${Buffer.byteLength(value)}\r\n${value}\r\n`;
  }).join("")}`;
}

function parseRedisReply(buffer) {
  const text = buffer.toString("utf8");
  const type = text[0];
  if (!type) return undefined;
  if (type === "+" || type === "-" || type === ":") {
    const lineEnd = text.indexOf("\r\n");
    if (lineEnd < 0) return undefined;
    if (type === "+") return text.slice(1, lineEnd);
    if (type === "-") throw new Error(text.slice(1, lineEnd));
    return Number(text.slice(1, lineEnd));
  }
  if (type === "$") {
    const firstLineEnd = text.indexOf("\r\n");
    if (firstLineEnd < 0) return undefined;
    const length = Number(text.slice(1, firstLineEnd));
    if (length < 0) return null;
    if (buffer.length < firstLineEnd + 2 + length + 2) return undefined;
    return text.slice(firstLineEnd + 2, firstLineEnd + 2 + length);
  }
  if (type === "*") {
    const lines = text.split("\r\n").slice(1);
    return lines.filter((line) => line && !line.startsWith("$"));
  }
  throw new Error("Unsupported Redis response");
}

async function redisUrl(command) {
  const redisUrl = new URL(process.env.REDIS_URL);
  const secure = redisUrl.protocol === "rediss:";
  const port = Number(redisUrl.port || (secure ? 6380 : 6379));
  const authPassword = decodeURIComponent(redisUrl.password || "");
  const authUser = decodeURIComponent(redisUrl.username || "");
  const commands = [];
  if (authPassword) {
    commands.push(authUser ? ["AUTH", authUser, authPassword] : ["AUTH", authPassword]);
  }
  commands.push(command);

  return new Promise((resolve, reject) => {
    const socket = (secure ? tls : net).connect({ host: redisUrl.hostname, port, servername: redisUrl.hostname });
    let buffer = Buffer.alloc(0);
    let index = 0;
    let settled = false;

    function fail(error) {
      if (settled) return;
      settled = true;
      socket.destroy();
      reject(error);
    }

    function sendNext() {
      if (index >= commands.length) return;
      socket.write(encodeRedisCommand(commands[index]));
    }

    socket.setTimeout(8000, () => fail(new Error("Redis connection timeout")));
    socket.once(secure ? "secureConnect" : "connect", sendNext);
    socket.on("error", fail);
    socket.on("data", (chunk) => {
      buffer = Buffer.concat([buffer, chunk]);
      try {
        const result = parseRedisReply(buffer);
        if (result === undefined) return;
        buffer = Buffer.alloc(0);
        index += 1;
        if (index < commands.length) {
          sendNext();
          return;
        }
        settled = true;
        socket.end();
        resolve(result);
      } catch (error) {
        fail(error);
      }
    });
  });
}

async function getAccounts() {
  const raw = await redis(["GET", ACCOUNT_KEY]);
  return raw ? JSON.parse(raw) : [];
}

async function saveAccounts(accounts) {
  await redis(["SET", ACCOUNT_KEY, JSON.stringify(accounts)]);
}

function publicUser(account) {
  return {
    id: account.id,
    name: account.name,
    username: account.username,
    role: account.role,
    status: account.status || "active"
  };
}

function getBearerUser(req) {
  const header = req.headers.authorization || "";
  return verifyToken(header.startsWith("Bearer ") ? header.slice(7) : "");
}

module.exports = {
  createToken,
  getAccounts,
  getBearerUser,
  hashPassword,
  json,
  publicUser,
  readBody,
  requiredEnv,
  saveAccounts,
  verifyPassword
};
