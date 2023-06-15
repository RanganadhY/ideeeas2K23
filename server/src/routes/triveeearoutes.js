const express = require('express')
const routes = express.Router()

const triveeeaControllers = require('../controllers/triveeeaControllers')

routes.post('/generate-unique-ids',triveeeaControllers.generateUniqueIds)
routes.post('/insert-no-of-questions',triveeeaControllers.uploadAdminData)
routes.post('/validate-user',triveeeaControllers.validateUniqueIds) 
routes.post('/add-student-details',triveeeaControllers.updateStudentData) 
routes.post('/upload-student-response',triveeeaControllers.uploadStudentResponse)
routes.post('/validate-student-result',triveeeaControllers.validateStudentResult)










module.exports = routes;