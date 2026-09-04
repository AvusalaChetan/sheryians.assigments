const express = require('express')
const route = express.Router()
const {fileController} = require('../controllers/file.controler')
const upload = require('../uploads/multer.config')

route.post('/', upload.single('profile'), fileController)

module.exports = route 