const express = require('express')
const pool = require('./src/config/db')

const UserRouter = require('./src/router/UserRouter')

const app = express()
const port = 3000

app.use(express.json())
app.use(UserRouter)


app.listen(port, (err, resultado) => {
    if (err) {
        console.log("erro ao executar o servidor", err);
    } else {
        console.log("servidor em acao");
    }
})