const crypto = require("crypto");

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
  const url = requiredEnv("KV_REST_API_URL");
  const token = requiredEnv("KV_REST_API_TOKEN");
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
