import Router from 'koa-router'
import { verifyAuth } from '../middleware/auth.middleware'
import { addArticle, getArticleLists, getArticleCount, getArticleDetail, giveThumbsUp } from '../controller/article.controller'
import { addArticleComment, addCommentCount, getCommentList } from '../controller/comment.controller'

const router = new Router()

router.post('/article/add', verifyAuth, addArticle)
router.get('/article/list', getArticleLists)
router.get('/article/count', getArticleCount)
router.get('/article/detail/:id', getArticleDetail)
router.post('/article/thumbs-up/:id', giveThumbsUp)
router.post('/article/addcomment', addArticleComment, addCommentCount)
router.get('/comment/list/:id', getCommentList)

module.exports = router
