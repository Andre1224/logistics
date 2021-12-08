const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const user = express.Router()

user.use(cookieParser())

const BASE_URL = path.join(
  __dirname.split('\\').slice(0, -2).join('\\'),
  '/public/db/userdb/'
)
const LOGIN_URL = BASE_URL + 'userLogin.json'
const INFO_URL = BASE_URL + 'userInfo.json'

user.post('/login', async(req, res) => {
  try {
    let list = await readFile(LOGIN_URL, 'utf-8')
    list = JSON.parse(list)
    const info = req.body
    for (const i of list) {
      if (i.username === info.username) {
        if (i.password === info.password) {
          res.send({
            code: 20000,
            data: { token: i.token },
            message: 'login successful'
          })
          break
        } else {
          res.send({
            code: 403,
            data: 'null',
            message: 'username or password incorrect'
          })
        }
      }
    }
  } catch (err) {
    res.send(err)
  }
  //   res.send({ code: 403, data: 'null', message: 'login failed' })
})

user.get('/info', async(req, res) => {
  try {
    // console.log(req)
    // console.log('获取cookies', req.cookies)
    const token = req.cookies.token
    let list = await readFile(INFO_URL, 'utf-8')
    list = JSON.parse(list)
    if (list[token]) {
      res.setHeader('Access-Control-Allow-Credentials', 'true')
      res.send({
        code: 20000,
        data: list[token],
        message: 'get user info successful'
      })
    } else {
      res.send({
        code: 403,
        data: 'null',
        message: 'token incorrect [from express]'
      })
    }
  } catch (err) {
    res.end(err)
  }
  //   res.send({ code: 403, data: 'null', message: 'login failed' })
})

user.post('/logout', async(req, res) => {
  try {
    const token = req.cookies.token
    // TODO: 删除token记录
    res.send({
      code: 20000,
      data: `token ${token} has deleted, user logout successful`,
      message: `token ${token} has deleted, user logout successful`
    })
  } catch (err) {
    res.send(err)
  }
})
module.exports = user
