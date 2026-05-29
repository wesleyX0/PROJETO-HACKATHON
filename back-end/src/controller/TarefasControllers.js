const pool = require('../config/db')

//Cadastrar tarefas  POST//
const cadastrarTarefa = (req, res) => {
    const {titulo, esc_pomodoro, usuario_id} = req.body
    const sql = ('INSERT INTO tarefas (titulo, esc_pomodoro, usuario_id) VALUES (?, ?, ?)')

    if (!titulo || !usuario_id) {
        return res.status(400).json({ mensagem: "Dados incompletos: título e usuário são obrigatórios" });
    }

    pool.query(sql, [titulo,esc_pomodoro, usuario_id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ mensagem: "erro ao salvar no banco de dados", detalhe: err.code})
        } else {
            return res.status(200).json({ mensagem: "tarefas cadastradas", dados: resultado})
        }
    })
}

//LISTAGEM DE TAREFAS PUT//
const visualizarTarefas = (req, res) => {
    const { usuario_id } = req.params;
    const sql = 'SELECT * FROM tarefas WHERE usuario_id = ?';

    pool.query(sql, [usuario_id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ mensagem: "Erro ao visualizar tarefas", detalhe: err.code });
        }
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Nenhuma tarefa encontrada para este usuário" });
        } else {
            return res.status(200).json(resultado);
        }
    });
};


//DELETAR TAREFAS//
const deletarTarefas = (req, res) => {
    const { id } = req.params
    const sql = ('DELETE FROM tarefas WHERE id = ?')

    pool.query(sql, [id], (err, resultado) => {
        if (err) {
            return res.status(500).json({mensagem: "erro para achar tarefa", detalhe: err.code})
        }
        if (resultado.affectedRows === 0){
            return res.status(404).json({mensagem: "Nenhuma tarefa encontrada"})
        } else {
            return res.status(200).json(resultado)
        }
    })
}
//PUT PROGRESSO DAS TAREFA
const atualizarProgresso = (req, res) => {
    const {id} = req.params 
    const sql = ('UPDATE tarefas SET act_pomodoros = act_pomodoros + 1 WHERE id = ?')

    pool.query(sql, [id], (err, resultado) => {
        if (err) {
            return res.status(500).json({mensagem: "erro no servidor", detalhe: err.code})
        }
        if (resultado.affectedRows === 0 ) {
            return res.status(404).json({mensagem: "erro ao para achar tarefa"})
        } else
            return res.status(200).json({mensagem: "tarefa atualizada"})
    })
}

//GET VER TAREFAS FEITAS
const concluirTarefa = (req, res) => {
    const { id } = req.params; 
    const sql = 'UPDATE tarefas SET status = "concluida" WHERE id = ?';

    pool.query(sql, [id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ mensagem: "Erro no servidor", detalhe: err.code });
        }
        
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Tarefa não encontrada" });
        }

        return res.status(200).json({ mensagem: "Tarefa concluída com sucesso!" });
    });
};

module.exports = {
    cadastrarTarefa,
    visualizarTarefas,
    deletarTarefas,
    atualizarProgresso,
    concluirTarefa
}