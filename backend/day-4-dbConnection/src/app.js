const express = require("express");

const connectDB = require("./config/db");
const notesModel = require("./models/note.model");
const app = express();

app.use(express.json())

connectDB();

app.get("/", (req, res) => {
  res.send("get req ");
});

app.post("/note", async (req, res) => {
  const {title, dec} = req.body;

  console.log(title,dec)
  try {
    const newNotes = await notesModel.create({
      title,
      dec
    });
    res.send(newNotes)
  } catch (error) {
    console.log('error',error)
  }
  
});

module.exports = app;
