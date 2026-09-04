import ImageKit from "@imagekit/nodejs";
import {Readable} from "stream";
import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.IMAGEKIT_PUBLIC_KEY ||
  !process.env.IMAGEKIT_PRIVATE_KEY ||
  !process.env.IMAGEKIT_ENDPOINT
) {
  console.log("imagekit is not correctly config");
}

const storageInstance = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
});

const sendFiles = async (file, fileName) => {
  const obj = {
    file: Readable.from(file),
    fileName,
    folders: "imageKitFolder",
  };

  return await storageInstance.files.upload(obj);
};

export default sendFiles;
