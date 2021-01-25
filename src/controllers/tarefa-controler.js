const Usuarios = require('../models/usuarios')

module.exports = (app, bd) => {

  app.get('/tarefas',  (req, res) => {
    res.send(bd.tarefas);
  });

  app.get('/tarefas:titulo',  (req, res) => {
    for(let taref of bd.tarefas){
      if (taref.titulo == req.params.titulo){
       res.send(taref)
      }
    }
    res.send(`Tarefa <strong> ${req.params.titulo}</strong> não encontrada`)
  });

  app.post('/tarefas', (req, res) => {
    const tarefa = new Tarefas(req.body.titulo, req.body.descricao, req.body.dataDeCriacao, req.body.status)
    bd.usuarios.push(tarefa)
    res.send(`OK`)
  })

}
  