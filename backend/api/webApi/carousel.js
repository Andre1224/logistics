const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const carouselRouter = express.Router();

const BASE_URL = path.join(__dirname.split('\\').slice(0, -2).join('\\'), '/public/db/webdb/')
const DB_URL = BASE_URL + 'carousel.json'

carouselRouter.get('/list', async (req, res) => {
    const list = await readFile(DB_URL, 'utf-8')
    const result = {}
    if (list) {
        result.code = 20000,
        result.data = list,
        result.message = 'request successful'
    }
    res.send(result)
})

module.exports = carouselRouter;