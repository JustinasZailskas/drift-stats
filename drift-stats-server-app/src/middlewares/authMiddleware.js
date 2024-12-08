const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ error: "Missing authrization" });
  }
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.userID = decoded.userID;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" + error.toString() });
  }
};

module.exports = authenticateUser;
