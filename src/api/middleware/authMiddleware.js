import jwt from "jsonwebtoken";
import User from "../src/api/models/User.js";

// Authentication Middleware
export async function authenticate(req, res, next) {
  const token = req.cookies.authToken;
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

// Admin Authorization Middleware
export async function isAdmin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).json({ msg: "Access Denied" });
  next();
}
