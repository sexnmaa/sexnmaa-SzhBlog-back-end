import errorTypes from '../data/error-types'
import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '../data/config'

export const verifyAuth = async (ctx, next) => {
  // 验证权限。，查token
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }
  const token = authorization.replace('Bearer ', '')

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = result
    console.log(result)
    await next()
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    ctx.app.emit('error', error, ctx);
  }
}