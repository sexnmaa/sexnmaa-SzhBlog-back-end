const Koa = require('koa')
const path = require('path')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body');
const logger = require('koa-logger')

import article from './routes/article'
import index from './routes/index'
import users from './routes/users'
import barrage from './routes/barrage'
import file from './routes/files'
import cors from 'koa2-cors'

// 自己的逻辑

import { errorHandle } from './data/error-handle'
// 允许跨域访问
app.use(cors())
// app.use(
//   cors({
//       origin: function(ctx) { //设置允许来自指定域名请求
//           if (ctx.url === '/test') {
//               return '*'; // 允许来自所有域名请求
//           }
//           return 'http://localhost:3001'; //只允许http://localhost:8080这个域名的请求
//       },
//       maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//       credentials: true, //是否允许发送Cookie
//       allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
//       allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//       exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
//   })
// )


// error handler
onerror(app)

// middlewares

app.use(koaBody({
  multipart: true, // 支持文件上传
  formLimit: "10mb",
  jsonLimit: "10mb",
  formidable: {
    uploadDir: path.join(__dirname, './public/images/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
  }
}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(barrage.routes(), barrage.allowedMethods())
app.use(file.routes(), file.allowedMethods())

// error-handling
app.on('error', errorHandle);
require('./service/database')

module.exports = app
