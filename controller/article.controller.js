const { add, getLists, getCount, getDetailById, addLikes } = require("../service/article.service")

export const addArticle = async (ctx, next) => {
  const { title, subtitle, content, url } = ctx.request.body
  const { id } = ctx.user
  const result = await add(title, subtitle, content, url, id)
  ctx.body = result
}

export const getArticleLists = async (ctx, next) => {
  const { offset, size } = ctx.query
  const result = await getLists(offset, size)
  ctx.body = result
}
// 获取文章总数
export const getArticleCount = async (ctx, next) => {
  const result = await getCount()
  ctx.body = result[0]
}

export const getArticleDetail = async (ctx, next) => {
  const { id } = ctx.params
  const result = await getDetailById(id)
  ctx.body = result[0]
}
// 点赞
export const giveThumbsUp = async (ctx, next) => {
  const { id } = ctx.params
  console.log(id);
  const result = await addLikes(id)
  ctx.body = result
}