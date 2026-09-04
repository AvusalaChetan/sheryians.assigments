const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("yooo");
});
//CRUD
app.post("/create", (req, res) => {
  const {username, password} = req.body;
  console.log(req.body);
  res.send({username, password});
});
app.listen(3000, () => console.log("server is running "));
