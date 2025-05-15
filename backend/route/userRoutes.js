import express from "express";
import {
  loginUser,
  registerUser,
  verifyOTP,
} from "../controller/userController.js";
export const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/verify-otp/:id", verifyOTP);
