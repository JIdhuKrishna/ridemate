const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      console.log("TOKEN:", token);

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      console.log("DECODED:", decoded);

      req.user = await User.findById(decoded.id).select("-password");

      console.log("USER:", req.user);

      if (!req.user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      return next();
    }

    return res.status(401).json({
      message: "No token provided",
    });
  } catch (error) {
    console.error("AUTH ERROR:", error.message);

    return res.status(401).json({
      message: "Not authorized",
      error: error.message,
    });
  }
};

module.exports = { protect };