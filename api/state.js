const {
  getAppState,
  getBearerUser,
  json,
  readBody,
  saveAppState
} = require("./_auth");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      return json(res, 200, { state: await getAppState() });
    }

    if (req.method === "PUT" || req.method === "POST") {
      const user = getBearerUser(req);
      if (!user) {
        return json(res, 401, { message: "Please login first." });
      }
      const body = await readBody(req);
      if (!body.state || typeof body.state !== "object") {
        return json(res, 400, { message: "State payload is required." });
      }
      await saveAppState({
        ...body.state,
        updatedAt: new Date().toISOString(),
        updatedBy: user.username
      });
      return json(res, 200, { ok: true });
    }

    return json(res, 405, { message: "Method not allowed" });
  } catch (error) {
    return json(res, 500, { message: error.message });
  }
};
