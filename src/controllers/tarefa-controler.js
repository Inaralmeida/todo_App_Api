const Tarefas = require('../models/tarefas')

module.exports = (app, bd) => {
  
  //mostra todas as tarefas
  bd.all('SELECT * FROM TAREFAS', (error, linhas)=>{
    if (error){
       throw new Error (`Erro ao rodar consulta: ${error}`)
    }
    else {
       app.get ('/tarefas', (req, res) => {
          res.send(linhas)
       })
    }
 })
  
  //mostra tarefas com parametro
  app.get('/tarefas/:titulo',  (req, res) => {
    for(let taref of bd.tarefas){
      if (taref.titulo == req.params.titulo){
        res.send(taref)
      }
    }
    res.send(`Tarefa <strong> ${req.params.titulo}</strong> não encontrada`)
  });
  
  //adciona tarefas
  app.post('/tarefas', (req, res) => {
    const tarefa = new Tarefas(req.body.titulo, req.body.descricao, req.body.dataDeCriacao, req.body.status)
    bd.tarefas.push(tarefa)
    console.log(tarefa)
    console.log(bd.tarefas)
    res.send(`Tarefa <strong>${req.body.titulo}</strong> adicionada`)
  })
  
  //deleta tarefas
  function deletaTarefas(parametro, banco){
    
    let tarefasNaoDeletados = []
    for(let i=0; i < banco.length; i++){
      if(banco[i].titulo !== parametro){
        tarefasNaoDeletados.push(banco[i])
      }
    }
    return tarefasNaoDeletados
  }
  app.delete('/tarefas/:titulo', (req, res)=>{
    
    bd.tarefas = deletaTarefas(req.params.titulo, bd.tarefas)
    res.send(`Tarefa <strong>"${req.params.titulo}"</strong> deletada`)
    
  })
  
  //atualiza tarefas de acordo com o titulo passado como parametro 
  function atualizaTarefa(parametro, body, banco){
    for(let tarefa of banco){
      if(tarefa.titulo === parametro){
        tarefa.titulo = body.titulo
        tarefa.descricao = body.descricao
        tarefa.status = body.status 
        tarefa.dataDeCriacao = body.dataDeCriacao
      }
    }
    
  }
  app.put('/tarefas/:titulo', (req, res)=>{
    
    atualizaTarefa(req.params.titulo, req.body, bd.tarefas)
    res.send(`Os dados da tarefa "<strong>${req.params.titulo}</strong>" foram atualizados com sucesso`)
    
    
  })
  
}
