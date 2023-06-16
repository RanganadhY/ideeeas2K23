const express = require('express')
const routes = express.Router()
const multer = require('../middleware/multer')
const photographiaControllers = require('../controllers/photographiaControllers')
// routes.post('/generate-unique-ids',triveeeaControllers.generateUniqueIds)
// routes.post('/validate-user',triveeeaControllers.validateUniqueIds) 
routes.post('/upload-image',multer.photographiaImgUpload,photographiaControllers.uploadImageDetails)
routes.get('/display-iamge-details',photographiaControllers.displayImageDetails)
routes.post('/casted-vote',photographiaControllers.validateStudentResponse)


module.exports = routes