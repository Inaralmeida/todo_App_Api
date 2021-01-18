module.exports = (app) => app.get('/Tarefas', (req, res) => {
    res.send(`Rota ativada com GET e recurso TAREFAS valores de TAREFAS devem ser retornados`)
  })

  module.exports = (app) => app.get('/Tarefas', (req, res) => {
  res.send(`Rota  POST de tarefa ativada: tarefa adicionada ao banco de dados`)
})
