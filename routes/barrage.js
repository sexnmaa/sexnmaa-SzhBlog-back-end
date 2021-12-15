import Router from 'koa-router'
import { addBarrage, getBarrageList } from '../controller/barrage.controller'


const router = new Router()

router.post('/barrage/add', addBarrage)
router.get('/barrage/list', getBarrageList)

module.exports = router