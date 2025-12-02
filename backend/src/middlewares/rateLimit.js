const rateLimit = require("express-rate-limit");

// 🔒 Global API rate limit (normal users)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 minutes
  max: 300,                   // 300 requests per 15 min per IP
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});


// 🔑 Login-specific rate limit (to prevent password brute-force)
const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,   // 5 minutes
  max: 10,                   // Only 10 login attempts allowed
  message: {
    success: false,
    message: "Too many login attempts. Try again after 5 minutes."
  },
  handler: (req, res) => {
    return res.status(429).json({
      success: false,
      message: "Too many login attempts. Try again later.",
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
});


// 🛡 Admin routes — more strict
const adminLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,                 // 100 requests allowed per admin
  message: {
    success: false,
    message: "Admin rate limit exceeded"
  },
  standardHeaders: true,
  legacyHeaders: false,
});


// Export all middleware
module.exports = {
  apiLimiter,
  loginLimiter,
  adminLimiter
};
