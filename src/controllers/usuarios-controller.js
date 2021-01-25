const Usuarios = require('../models/usuarios')

module.exports = (app, bd) =>{
   app.get ('/usuarios', (req, res) => {
     res.send(bd.usuarios)
  })

  app.get ('/usuarios/:email', (req, res) => {
     for(let user of bd.usuarios){
        if (user.email == req.params.email){
         res.send(user)
        }
     }
    res.send(`Usuario <strong> ${req.params.email}</strong> não encontrado`)
 })


 app.delete('/usuario/:email', (req, res)=> {
    let usuariosNaoDeletados = []

    for(let i=0; i < bd.usuarios.length; i++){
       if(bd.usuarios[i].email !== req.params.email){
          usuariosNaoDeletados.push(bd.usuarios[i])
       }
    }
    
    bd.usuarios = usuariosNaoDeletados
    console.log(req.params.email)
    res.send(`Usuario ${req.params.email} foi deletado`)



 })

   app.put('/usuarios/:email', (req, res)=>{

      const alteracao = req.params.email
      
      for(let user of bd.usuarios){
         if(user.email === alteracao){
            user.nome = req.body.nome
            user.email = req.body.email
            user.senha = req.body.senha 
         }
      }

      res.send(`Os dados do usuario <strong>${alteracao}</strong> foram atualizadocom sucesso`)

      
   })
  

  app.post('/usuarios', (req, res) => {
    const user = new Usuarios(req.body.nome, req.body.email, req.body.senha)
    bd.usuarios.push(user)
   res.send(`usuario ${req.body.nome} adicionado`)})
}