const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
const port = 3030
const usuariosController = require('./controllers/usuarios-controller.js')
const tarefasController = require('./controllers/tarefa-controler.js')
const bd = require('./infra/bd')
const TarefasModel = require('./models/tarefas.js')
const UsuariosModel = require('./models/usuarios.js')

const tarefa_1 = new TarefasModel('Escrever o post', 'Escrever um post usando o circulo dourado', 'Em andamento', '18/01/2019')

 bd.usuarios.push(new UsuariosModel('inara', 'ira@gmail.com', '123456'))

 module.exports = bd
 console.log(bd)

usuariosController(app, bd)
tarefasController(app)





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})