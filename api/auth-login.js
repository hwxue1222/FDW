const {
  createToken,
  getAccounts,
  json,
  publicUser,
  readBody,
  requiredEnv,
  verifyPassword
} = require("./_auth");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { message: "Method not allowed" });
  }

  try {
    const { username, password } = await readBody(req);
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = requiredEnv("ADMIN_PASSWORD");

    let user = null;
    if (username === adminUsername && password === adminPassword) {
      user = {
        id: "admin",
        name: "Administrator",
        username: adminUsername,
        role: "admin",
        status: "active"
      };
    } else {
      const accounts = await getAccounts();
      const account = accounts.find((item) => item.username === username && item.status === "active");
      if (account && verifyPassword(password, account.passwordHash)) {
        user = publicUser(account);
      }
    }

    if (!user) {
      return json(res, 401, { message: "Invalid username or password." });
    }

    return json(res, 200, { token: createToken(user), user });
  } catch (error) {
    return json(res, 500, { message: error.message });
  }
};
