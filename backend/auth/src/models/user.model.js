import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
