import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { userRouter } from "./route/userRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { connectDB } from "./config/connect.js";
import cors from "cors";
import { postRouter } from "./route/postRout.js";

dotenv.config();
const app = express();
app.use(cors()); // Enable CORS for all routes

connectDB(); // Assuming you have a function to connect to your database

app.use(express.json()); // for parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded bodies

app.use("/api/users/", userRouter);

// routes for posts
app.use("/api/posts/", postRouter); // Assuming you have a postRouter defined

// Error handling middleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`.bgCyan.white);
});
