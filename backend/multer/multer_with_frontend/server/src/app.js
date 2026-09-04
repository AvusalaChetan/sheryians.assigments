const express = require('express');
const cors = require('cors');
const app = express();
const fileRoute = require("./routes/file.route");

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }))

app.use("/create-profile", fileRoute);

app.get("/health", (req, res) => res.status(200).send("server is running"));

module.exports = app;
