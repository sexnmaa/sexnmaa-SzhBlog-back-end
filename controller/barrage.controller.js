import { add, getList } from "../service/barrage.service"

export const addBarrage = async (ctx, next) => {
  const { content } = ctx.request.body
  const result = await add(content)
  ctx.body = result
}

export const getBarrageList = async (ctx, next) => {
  const result = await getList()
  ctx.body = result
}