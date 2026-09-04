import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "image is required"],
  },
  caption: {
    type: String,
    require: true,
  },
  
},{timestamps:true});

const PostModel = mongoose.model("post", postSchema);
export default PostModel;
