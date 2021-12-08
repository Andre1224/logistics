const express = require('express');
const carouselRouter = require('./carousel')
const specialservice = require('./specialservice')
const directmail = require('./directmail')
const user = require('../userApi/login')

const webapp = express.Router();

webapp.use('/carousel', carouselRouter)
webapp.use('/specialservice', specialservice)
webapp.use('/directmail', directmail)
webapp.use('/user', user)

module.exports = webapp;