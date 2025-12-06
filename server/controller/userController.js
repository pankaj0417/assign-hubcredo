import Users from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

// create user
export const userCreate = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // basic validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required: username, email, password.",
      });
    }

    if (typeof username !== "string" || username.trim().length < 3) {
      return res
        .status(400)
        .json({ message: "Username must be at least 3 characters." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    if (typeof password !== "string" || password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const existingUser = await Users.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const created = await Users.create({
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password: hashedpassword,
    });

    // n8n webhook
    if (process.env.N8N_WEBHOOK_URL) {
      axios
        .post(process.env.N8N_WEBHOOK_URL, {
          username: created.username,
          email: created.email,
        })
        .catch((err) => {
          console.error("n8n webhook error:", err?.message || err);
        });
    }

    res.status(201).json({
      message: "User created successfully.",
      user: {
        id: created._id,
        username: created.username,
        email: created.email,
      },
    });
  } catch (error) {
    console.error("error in creating user", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// login
export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all feilds are required" });
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// logout
export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(200).json({ message: "Logged out successfully" });
};
