const express = require('express') // web模块
const logger = require('morgan') // 日志中间件
const cors = require('cors') // 跨域处理中间件
const path = require('path') // 路径解析模块
const webapp = require('./api/webApi/webapp')
const app = express()
const port = 3000

// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//     res.header('X-Powered-By', ' 3.2.1')
//     res.header('Content-Type', 'application/json;charset=utf-8')
//     next()
//   })
app.use(
  cors({
    origin: ['http://localhost:8088'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
    alloweHeaders: ['Content-Type', 'Authorization']
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '/public/static/images'))) // 挂载静态资源路径

app.use('/api', webapp) // 网站api管理

app.all('*', (err, req, res, next) => {
  res.status(500).send(res)
})

app.get('/test', (req, res) => {
  // const static_path = path.join(__dirname, '/public/static/images')
  // res.send(`static path is ${static_path}`)
  res.send('get')
})

app.listen(port, () => {
  // 服务端口
  console.log(`The express has been started on port ${port}`)
})
 