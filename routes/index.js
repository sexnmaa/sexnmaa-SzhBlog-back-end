// const router = require('koa-router')()
import Router from 'koa-router'
import { login } from '../controller/auth.controller'
const router = Router()
import { verifyLogin } from '../middleware/login.middleware'

router.post('/login', verifyLogin, login)

module.exports = router
