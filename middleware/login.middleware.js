import errorTypes from '../data/error-types'
import { getUserByName } from '../service/login.service';
import { md5Password } from '../utils/password-handle'

export const verifyLogin = async (ctx, next) => {
  console.log(ctx);
  console.log('验证登录的middleware');

  const { name, password } = ctx.request.body
  console.log(md5Password('20000125fff'));

  // 判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  const result = await getUserByName(name)
  const user = result[0]
  if (!user) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  if (md5Password(password) !== user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_INCORRENT);
    return ctx.app.emit('error', error, ctx); 
  }

  ctx.user = user

  await next()
}

