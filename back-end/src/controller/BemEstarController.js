const pool = require('../config/db')

const salvarRegistroDiario = (req, res) => {
    const {data, tempo_foco_minutos, horas_sono, humor} = req.body
    const sql = (`
        INSERT INTO registros_diarios (usuario_id, data, horas_sono, humor, tempo_tela_minutos)
        VALUES (?, CURDATE(), ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
            horas_sono = VALUES(horas_sono),
            humor = VALUES(humor),
            tempo_tela_minutos = VALUES(tempo_tela_minutos)
    `)
    if (!usuario_id) {
        return res.status(401).json({ mensagem: "ID do usuario obrigatorio"})
    }

    pool.query(sql, [data, tempo_foco_minutos, horas_sono, humor], (err, resultado) => {
        if (err) {
            return res.status(501).json({mensagem: "Erro ao salvar bem-estar", detalhe: err.code})
        }
        return res.status(200).json({mensagem: "Registro de bem-estar salvo com sucesso!"})
    })
}

const buscarRegistroHoje = (req, res) => {
    const {usuario_id} = req.params
    const sql = ('SELECT * FROM registros_diarios WHERE usuario_id = ? AND data = CURDATE()')

    pool.query(sql, [usuario_id], (err, resultado) => {
        if (err) {
            return res.status(500).json({ mensagem: "Erro para buscar dados", detalhe: err.code})
        } 
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum registro hoje" });
        } 
        return res.status(200).json(resultado[0]);
    })
}

module.exports = { salvarRegistroDiario, buscarRegistroHoje };