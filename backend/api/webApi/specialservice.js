const express = require('express')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const specialservice = express.Router()

const BASE_URL = path.join(
  __dirname.split('\\').slice(0, -2).join('\\'),
  '/public/db/webdb/'
)
const DB_URL = BASE_URL + 'specialservice.json'

specialservice.get('/list', async(req, res) => {
  const list = await readFile(DB_URL, 'utf-8')
  const result = {}
  if (list) {
    (result.code = 20000),
    (result.data = list),
    (result.message = 'request successful')
  }
  // console.log(list);
  res.send(result)
})

specialservice.patch('/update/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    const rawData = req.body
    let list = await readFile(DB_URL, 'utf-8')
    list = JSON.parse(list)
    if (id > list.length) {
      res.send('404')
    } else {
      for (const i in rawData.content) {
        // console.log(list[rawData.index][i], rawData.content[i]);
        list[id][i] = rawData.content[i]
      }
    }
    await writeFile(DB_URL, JSON.stringify(list))
    res.send('patch successful')
  } catch (error) {
    res.send(error)
  }
})

specialservice.post('/add/', async(req, res, next) => {
  try {
    const id = req.params.id
    console.log(req.body)
    let list = await readFile(DB_URL, 'utf-8')
    list = JSON.parse(list)
    list.push(req.body)
    await writeFile(DB_URL, JSON.stringify(list))
    res.send('add successful')
  } catch (error) {
    res.send(error)
  }
})

specialservice.delete('/delete/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    let list = await readFile(DB_URL, 'utf-8')
    list = JSON.parse(list)
    if (id != -1 && !list[id]) {
      res.send(`can not fount data index: ${id}`)
    } else {
      if (id == -1) {
        list.pop()
      } else {
        list.splice(id, 1)
      }
    }
    await writeFile(DB_URL, JSON.stringify(list))
    res.send('delete successful')
  } catch (error) {
    res.send(error)
  }
})
module.exports = specialservice
