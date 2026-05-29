const express = require('express')
const pool = require('./src/config/db')
const cors = require('cors');

const UserRouter = require('./src/router/UserRouter')
const TarefasRouter = require('./src/router/TarefasRouter')
const bemEstarRoutes = require('./src/router/BemEstarRouter')

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())
app.use(UserRouter)
app.use(TarefasRouter)
app.use(bemEstarRoutes)

app.listen(port, (err) => {
    if (err) {
        console.log("erro ao executar o servidor");
    } else {
        console.log("servidor em acao");
    }
})

module.exports = app;