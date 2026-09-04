const fileController = (req, res) => {

  const {name, email} = req.body;
  const file = req.file;

  console.log('Name:', name, 'Email:', email, 'File:', file);
  return res.status(201).json({name, email, file});
};

module.exports = {fileController};
