const BemEstarRouter = require('../controller/BemEstarController')
const router = require('express').Router()

router.post('/salvarRegistroDiario/:usuario_id',BemEstarRouter.salvarRegistroDiario)
router.get('/bem-estar/:usuario_id', BemEstarRouter.buscarRegistroHoje)

module.exports = router
