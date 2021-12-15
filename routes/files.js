import Router from 'koa-router'
import { getPicList } from '../controller/file.controller'
import { loadBg, uploadPic } from '../middleware/file.middleware'


const router = new Router()

router.post('/upload', uploadPic)
router.post('/uploadBg', loadBg)
router.get('/get-pics', getPicList)

module.exports = router