import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    date: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
