module.exports = (app) => app.get('/Tarefas', (req, res) => {
    res.send(`Rota ativada com GET e recurso TAREFAS valores de TAREFAS devem ser retornados`)
  })

<<<<<<< Updated upstream
  module.exports = (app) => app.get('/Tarefas', (req, res) => {
  res.send(`Rota  POST de tarefa ativada: tarefa adicionada ao banco de dados`)
})
=======
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
>>>>>>> Stashed changes
