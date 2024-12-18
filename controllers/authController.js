import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  const { firstname, lastname, email, password, address } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({
      firstname,
      lastname,
      email,
      password,
      address,
    });

    await user.save();
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // Set the token as a cookie
    res.cookie("authToken", token, {
      httpOnly: true, // Ensures the cookie is not accessible via JavaScript
      // secure: process.env.NODE_ENV === "production", // Use secure cookies in production (requires HTTPS)
      maxAge: 3600000, // 1 hour expiration time
      sameSite: "Strict", // Helps mitigate CSRF attacks
    });

    res.json({ msg: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function logout(req, res) {
  res.clearCookie("authToken"); // Clear the cookie
  res.json({ msg: "Logged out successfully" });
}
