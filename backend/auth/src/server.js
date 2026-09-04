import app from "./app/app.js";
import connectDB from "./config/db.config.js";

connectDB().then(()=> console.log('db is connected '));

app.listen(8080, () => console.log("server is running"));
