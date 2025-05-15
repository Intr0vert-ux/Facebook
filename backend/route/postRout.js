import express from "express";
import { addPost } from "../controller/postController.js";

const router = express.Router();

router.post("/addPost/:user_id", addPost);

export { router as postRouter };
