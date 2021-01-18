const express = require('express')
const app = express()
const port = 3030
const usuariosController = require('./controllers/usuarios-controller.js')
const tarefasController = require('./controllers/tarefa-controler.js')

usuariosController(app)
tarefasController(app)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})