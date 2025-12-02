const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Provider = require("../models/Provider");

exports.verifyToken = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      (req.headers.authorization
        ? req.headers.authorization.replace("Bearer ", "").replace(/^"|"$/g, "")
        : "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login to access this resource",
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user or provider
    let account = await User.findById(decoded.id);
    let accountType = "user"; // default

    if (!account) {
      account = await Provider.findById(decoded.id);
      accountType = "provider";
    }

    if (!account) {
      return res.status(401).json({
        success: false,
        message: "Account not found for this token",
      });
    }

    req.user = {
      id: account._id,
      role: account.role || accountType,
      fullData: account,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
