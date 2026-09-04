import PostModel from "../models/post.model.js";
import sendFiles from "../services/imagekit.service.js";

const createPost = async (req, res) => {
  const {caption} = req.body;
  const file = req.file;

  if (!caption || !file)
    return res.status(400).json({
      success: false,
      message: "caption & file is required",
    });
  try {
    const uploadImageUrl = await sendFiles(file.buffer, file.originalname);

    console.log("uploadImageUrl", uploadImageUrl);
    const newPost = await PostModel.create({
      caption,
      image: uploadImageUrl.url,
    });

    res.status(201).json({
      post: newPost,
      success: true,
      message: "post/image is successfully uploaded",
    });
  } catch (error) {
    console.error(`Error creating post: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default createPost;
