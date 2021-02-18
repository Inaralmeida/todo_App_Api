const express = require('express')
const app = express()
<<<<<<< Updated upstream
const port = 3030
=======
app.use(bodyparser.json())
app.use(cors())
const port = process.env.PORT

>>>>>>> Stashed changes
const usuariosController = require('./controllers/usuarios-controller.js')
const tarefasController = require('./controllers/tarefa-controler.js')

usuariosController(app)
tarefasController(app)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})