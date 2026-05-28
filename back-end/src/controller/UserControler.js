const pool = require('../config/db')

const login = (req, res) => {
    const {email, senha} = req.body
    const sql = ('SELECT * FROM usuarios WHERE email = ?')

    pool.query(sql, [email], (err, resultado) => {
        if (err) {
            return res.status(500).json({ mensagem: "erro do lado do servidor" })
        } 
        if (resultado.length === 0){
            return res.status(401).json({mensagem: "email ou senha incorretos"})
        }
        if(resultado[0].senha !== senha) {
            return res.status(401).json({"mensagem":"email ou senha incorretos"})
        }else 
           return res.status(200).json({
            mensagem : "login realizado com secesso",
            usuario: {
                id: resultado[0], id,
                nome: resultado[0], nome,
                email: resultado[0], email
            }
           })
    })
}

const cadastrar = (req, res) => {
    const {nome, email, senha} = req.body

    if (!nome || !email || !senha) {
       return res.status(400).json({ mensagem: "Dados incompletos"});
    } 
    
    const sql = ('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)')

    pool.query(sql, [nome, email, senha], (err, resultado) =>{
        if (err) {
            return res.status(500).json({ mensagem: "erro ao salvar no banco de dados", detalhe: err.code})
        } else{
            return res.status(200).json({ mensagem: "usuario cadastrado com secesso", dados: resultado})
        }
    })
}

const atulizar = (req, res) => {
    const {nome, email, senha} = req.body
    const { id } = req.params;
    const sql = ('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?')

    pool.query(sql, [nome, email, senha, id], (err,resultado) => {
        if (err) {
        return res.status(500).json({ mensagem: "Erro ao atualizar no banco", detalhes: err });
        }
       if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    } else {
        return res.status(200).json({ mensagem: "Atualizado com sucesso!" });
        }
    })
}


const deletar_conta = (req, res) => {
    const { id } = req.params
    const sql = ('DELETE FROM usuarios WHERE id = ?')

    pool.query(sql, [id], (err, resultado) => {
        if (err) {
            return res.status(500).json({mensagem: "erro do lado do servidor"})
        } 
        if (resultado.affectedRows === 0) {
            return res.status(404).json({mensagem: "usuario nao encontrado"})
        } else {
            return res.status(200).json({mensagem: "usuario deletado com secesso"})
        }
    })
}

module.exports = {
    login, 
    cadastrar, 
    atulizar,
    deletar_conta
}