import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/auth/register", async (req, res) => {
  const {email, name, password} = req.body;
  if (!name || !email || !password)
    return res.status(500).json("req.body is empty");

  const passHash = await bcrypt.hash(password, 10);
  console.log(passHash);
  const user = await userModel.create({
    name,
    email,
    password: passHash,
  });
  const token = jwt.sign({id: user._id}, "schrete");

  res.status(201).json({
    message: "user created succufully",
    dtata: {
      user: {
        email,
        name,
        _id: user._id,
      },
      token,
    },
  });
});

app.get("/api/auth/me", async (req, res) => {
  const authHeader = req.headers.authorization;

  const data = jwt.decode(authHeader);
  console.log(data);
  const user = await userModel.findById(data.id);
  console.log(user);
  res.status(200).json({user});
});
export default app;
