import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.config.js";
import postRoute from "./routes/post.route.js";
connectDB()
  .then(() => console.log("Database connection initiated",process.env.MONGO_URI))
  .catch((err) => console.error("Database connection error:", err));

const app = express();
app.use(express.json());
app.use("/post", postRoute);

export default app;
