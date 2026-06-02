const tarefasController = require('../controller/TarefasControllers')
const router = require('express').Router()

router.get('/tarefas/:id', tarefasController.visualizarTarefas)
router.post('/tarefas',tarefasController.cadastrarTarefa)
router.put('/tarefasProgresso/:id', tarefasController.atualizarProgresso);
router.put('/tarefasConcluir/:id', tarefasController.concluirTarefa);
router.delete('/deletarTarefa/:id', tarefasController.deletarTarefas)

module.exports = router