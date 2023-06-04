const express = require('express')
const routes = express.Router()

const triveeeaControllers = require('../controllers/triveeeaControllers')

routes.post('/generate-unique-ids',triveeeaControllers.generateUniqueIds)
routes.post('/insert-no-of-questions',triveeeaControllers.getAdminData)











module.exports = routes;