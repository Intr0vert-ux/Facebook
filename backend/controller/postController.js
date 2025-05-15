import mongoose from "mongoose";
import { Posts } from "../models/postModel.js";

export const addPost = async (req, res) => {
  const { caption, background = "#ffffff" } = req.body;
  const { user_id } = req.params;

  if (!caption) {
    return res.status(400).json({ message: "Caption is required" });
  }

  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const newPost = await Posts.create({
      caption,
      // background,
      user_id,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Post creation error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map((e) => e.message),
      });
    }

    res.status(500).json({ message: "Failed to create post" });
  }
};
