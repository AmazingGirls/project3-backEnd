const express = require('express')
const serviceRouter = express.Router()
const {addNewService, getAllServices, getOneService} = require('../Controllers/serviceController')

serviceRouter.get('/', getAllServices)
serviceRouter.post('/add', addNewService)
serviceRouter.post('/oneService', getOneService)

module.exports = {serviceRouter}