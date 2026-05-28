const UserController = require('../controller/UserControler')
const router = require('express').Router()

router.post('/cadastro', UserController.cadastrar)
router.post('/login',UserController.login)
router.put('/usuario/:id',UserController.atulizar)
router.delete('/usuario/:id',UserController.deletar_conta)

module.exports = router
