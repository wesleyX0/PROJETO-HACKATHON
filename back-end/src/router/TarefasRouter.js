const tarefaController = require('../controller/TarefasControllers')
const router = require('express').Router()

router.post('./cadastrarTarefa',tarefaController.cadastrarTarefa)
router.get('./visualizarTarefa', tarefaController.visualizarTarefas)
router.delete('./deletarTarefa', tarefaController.deletarTarefas)

module.exports = router