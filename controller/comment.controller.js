import { addComment, addCount, getList } from "../service/comment.service"


export const addArticleComment = async (ctx, next) => {
  const { nickname, content, article_id } = ctx.request.body
  console.log(nickname);
  const result = await addComment(nickname, content, article_id)
  ctx.body = result
  await next()
}


export const addCommentCount = async (ctx, next) => {
  const { article_id } = ctx.request.body
  const result = await addCount(article_id)
}

export const getCommentList = async (ctx, next) => {
  const { id } = ctx.params
  const result = await getList(id)
  ctx.body = result
}