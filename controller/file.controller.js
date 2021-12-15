import {getList} from '../service/file.service'


export const getPicList = async (ctx, next) => {
  const result = await getList()
  ctx.body = result
}