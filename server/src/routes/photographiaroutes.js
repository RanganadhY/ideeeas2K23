const express = require('express')
const routes = express.Router()

const photographiaControllers = require('../controllers/photographiaControllers')
// routes.post('/generate-unique-ids',triveeeaControllers.generateUniqueIds)
// routes.post('/validate-user',triveeeaControllers.validateUniqueIds) 
routes.post('/upload-image',photographiaControllers.uploadImageDetails)



module.exports = routes