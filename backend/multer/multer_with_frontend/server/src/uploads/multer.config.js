const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:\\vscodeFolders\\Backend\\multer\\multer_with_frontend\\server\\src\\uploads");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({storage});
module.exports = upload
