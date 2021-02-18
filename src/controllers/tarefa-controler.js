const Tarefas = require('../models/tarefas')
const tarefasDao = require("../DAO/tarefasDao")

module.exports = (app, bd) => {
  
  const daoTarefas = new tarefasDao(bd)

  //mostra todas as tarefas
  app.get("/tarefas", async(req, res)=>{
    try{

      const retornoListaDeTarefas = await daoTarefas.listaTarefas()
      res.send(retornoListaDeTarefas)

    }catch(erro){

      res.send(erro)

    }
  })
  

  
  //mostra tarefas com parametro
  app.get('/tarefas/:titulo', async (req, res) => {
    try{
      const retornoBuscaTarefa = await daoTarefas.buscaTarefa(req.params.titulo)
      res.send(retornoBuscaTarefa)
    }catch(error){
      res.send(error)
    }
  });
  
  //adciona tarefas
  app.post('/tarefas', async(req, res) => {
    const tarefa =[req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao]
    try{
      const retornoAdicionaTarefas = await daoTarefas.adicionaTarefa(tarefa)
      res.send(retornoAdicionaTarefas)
    }catch(error){
      res.send(error)
    }
    
  })
  
  //deleta tarefas
  app.delete('/tarefas/:titulo', async (req, res)=>{
  
    try{

      const retornoDeletaTarefa = await daoTarefas.deletaTarefa(req.params.titulo)
      res.send(retornoDeletaTarefa)
    }catch(error){
      res.send(error)
    }
    
  
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
  app.put('/tarefas/:titulo', async (req, res)=>{
  
    try{
      const tarefa =[req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao, req.params.titulo]
      const retornoAtualizaTarefa = await daoTarefas.atualizaTarefa(tarefa)
      res.send(retornoAtualizaTarefa)
    }catch(error){
      res.send(error)
    }
  
  
  })
}
