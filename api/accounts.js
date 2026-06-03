const {
  getAccounts,
  getBearerUser,
  hashPassword,
  json,
  publicUser,
  readBody,
  saveAccounts
} = require("./_auth");

module.exports = async function handler(req, res) {
  try {
    const user = getBearerUser(req);
    if (!user) {
      return json(res, 401, { message: "Please login first." });
    }
    if (user.role !== "admin") {
      return json(res, 403, { message: "Only administrators can manage accounts." });
    }

    const accounts = await getAccounts();

    if (req.method === "GET") {
      return json(res, 200, {
        accounts: [
          { id: "admin", name: "Administrator", username: process.env.ADMIN_USERNAME || "admin", role: "admin", status: "active" },
          ...accounts.map(publicUser)
        ]
      });
    }

    if (req.method === "POST") {
      const { name, username, password } = await readBody(req);
      const cleanUsername = String(username || "").trim();
      if (!name || !cleanUsername || !password) {
        return json(res, 400, { message: "Name, username and password are required." });
      }
      if ((process.env.ADMIN_USERNAME || "admin") === cleanUsername || accounts.some((account) => account.username === cleanUsername)) {
        return json(res, 409, { message: "Username already exists." });
      }

      const account = {
        id: `u${Date.now()}`,
        name,
        username: cleanUsername,
        passwordHash: hashPassword(password),
        role: "employee",
        status: "active",
        createdAt: new Date().toISOString()
      };
      accounts.push(account);
      await saveAccounts(accounts);
      return json(res, 201, { account: publicUser(account) });
    }

    if (req.method === "PUT") {
      const { id, name, username, password } = await readBody(req);
      const cleanName = String(name || "").trim();
      const cleanUsername = String(username || "").trim();
      const accountIndex = accounts.findIndex((account) => account.id === id);
      if (accountIndex < 0) {
        return json(res, 404, { message: "Account not found." });
      }
      if (!cleanName || !cleanUsername) {
        return json(res, 400, { message: "Name and username are required." });
      }
      const adminUsername = process.env.ADMIN_USERNAME || "admin";
      const usernameTaken =
        adminUsername === cleanUsername ||
        accounts.some((account) => account.id !== id && account.username === cleanUsername);
      if (usernameTaken) {
        return json(res, 409, { message: "Username already exists." });
      }

      accounts[accountIndex] = {
        ...accounts[accountIndex],
        name: cleanName,
        username: cleanUsername,
        updatedAt: new Date().toISOString()
      };
      if (password) {
        accounts[accountIndex].passwordHash = hashPassword(password);
      }
      await saveAccounts(accounts);
      return json(res, 200, { account: publicUser(accounts[accountIndex]) });
    }

    return json(res, 405, { message: "Method not allowed" });
  } catch (error) {
    return json(res, 500, { message: error.message });
  }
};
