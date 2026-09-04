import mongoose from "mongoose";

const connectDB = async ()=>{
    if(!process.env.MONGODB_URI) console.log('MONGODB_URI is not there')
    mongoose.connect(process.env.MONGODB_URI)
}

export default connectDB