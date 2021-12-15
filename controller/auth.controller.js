import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../data/config'

export const login = async (ctx, next) => {
  const { id, name, nickname } = ctx.user
  const token = jwt.sign({id, name}, PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24,
    algorithm: 'RS256'
  })

  ctx.body = {id, name, nickname, token}
}