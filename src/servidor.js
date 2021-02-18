const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())
const port = process.env.PORT

const usuariosController = require('./controllers/usuarios-controller.js')
const tarefasController = require('./controllers/tarefa-controler.js')
const bd = require('./infra/sqlite-db')

usuariosController(app, bd)
tarefasController(app, bd)





app.listen(port, () =>console.log(`[INFO] Servidor rodando na porta: ${port}`)
)