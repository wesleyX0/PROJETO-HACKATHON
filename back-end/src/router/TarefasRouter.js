const tarefasController = require('../controller/TarefasControllers')
const router = require('express').Router()

router.get('./visualizarTarefa', tarefasController.visualizarTarefas)
router.post('./cadastrarTarefa',tarefasController.cadastrarTarefa)
router.put('/tarefas/progresso/:id', tarefasController.atualizarProgresso);
router.put('/tarefas/concluir/:id', tarefasController.concluirTarefa);
router.delete('./deletarTarefa', tarefasController.deletarTarefas)

module.exports = router