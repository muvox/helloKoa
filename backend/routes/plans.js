const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/plans')

router.get('/', Ctrl.findAll)
router.post('/', Ctrl.create)
router.delete('/:id', Ctrl.destroy)
// router.get('/subs', Ctrl.findSubs)
router.get('/plans', Ctrl.stripePlans)

module.exports = router.routes()
