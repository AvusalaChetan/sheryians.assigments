import express from "express";
const route = express.Router();
import createPost from "../controller/Post.controller.js";
import uploads from "../config/multer.config.js";

route.post("/create",uploads.single('image'), createPost);

export default route;
