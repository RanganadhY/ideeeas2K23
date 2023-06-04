const express = require('express')
const routes = express.Router()

const triveeeaControllers = require('../controllers/triveeeaControllers')
routes.post('/generate-unique-ids',triveeeaControllers.generateUniqueIds)




module.exports = routes