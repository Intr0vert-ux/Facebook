import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

// Generate OTP
const generateOTP = () => crypto.randomInt(100000, 1000000).toString();

// Register User
export const registerUser = asyncHandler(async (req, res) => {
  const { f_name, l_name, date, month, year, gender, email, password } =
    req.body;

  if (
    !f_name ||
    !l_name ||
    !date ||
    !month ||
    !year ||
    !gender ||
    !email ||
    !password
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = generateOTP();

  const newUser = await User.create({
    f_name,
    l_name,
    date,
    month,
    year,
    gender,
    email,
    password: hashedPassword,
    otp,
    otp_created_at: Date.now(),
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password",
    },
  });

  const option = {
    from: "Facebook",
    to: email,
    subject: "Facebook OTP Verification",
    html: `<h1>Facebook OTP</h1><p>Your OTP is <b>${otp}</b>. It is valid for 10 minutes.</p>`,
  };

  transport.sendMail(option, (error, info) => {
    if (error) {
      console.error("Email send error:", error);
      res.status(500);
      throw new Error("Failed to send OTP email");
    }
  });

  res.status(201).json(newUser);
});

// Verify OTP
export const verifyOTP = asyncHandler(async (req, res) => {
  const { otp } = req.body;
  const { id } = req.params;

  if (!otp) {
    res.status(400);
    throw new Error("Please provide the OTP");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid User ID");
  }

  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const otpExpiry = 10 * 60 * 1000; // 10 minutes
  if (Date.now() - user.otp_created_at > otpExpiry) {
    user.otp = null;
    await user.save();
    res.status(400);
    throw new Error("OTP expired, request a new one");
  }

  if (user.otp == otp) {
    res.status(400);
    throw new Error("Invalid OTP");
  }

  user.otp = null;
  user.otp_verified = true;
  await user.save();

  res.status(200).json(user);
});

//login user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    res.status(401);
    throw new Error("Invalid password");
  }

  res.status(200).json(user);
});
