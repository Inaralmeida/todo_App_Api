const Usuarios = require('../models/usuarios')
const UsuariosDao = require("../DAO/usuariosDao")



module.exports = (app, bd) =>{
   
   
   
   const DaoUsuarios = new UsuariosDao(bd)
   
   //Mostra usuarios
   app.get ('/usuarios', async (req, res) => {
      
      try{
         
         let listaDeUsuarioRetorno = await DaoUsuarios.listaUsuarios()
         res.send(listaDeUsuarioRetorno)
      }
      catch(error){
         res.send(error)
      }
      
      
   })   
   
   //Adiciona usuarios
   app.post('/usuarios', (req, res) => {
      DaoUsuarios.AdicionaUsuario(req.body)
      .then( (feito)=> {res.send(feito)})
      .catch( (error)=> { res.send(error)})
   }) 
   
   //mostra usuarios filtrado com parametro :email
   app.get ('/usuarios/:email', (req, res) => {
      
      DaoUsuarios.BuscaUsuario(req.params.email)
      .then((usuario)=> res.send(usuario))
      .catch((erro)=> res.send(erro))
   })
   
   //deleta usuarios
   // function deletaUsuario(parametro, banco){
   
   //    let usuariosNaoDeletados = []
   //    for(let i=0; i < banco.length; i++){
   //       if(banco[i].email !== parametro){
   //          usuariosNaoDeletados.push(banco[i])
   //       }
   //    }
   //    return usuariosNaoDeletados
   // }
   app.delete('/usuarios/:email', (req, res)=> {
      
      DaoUsuarios.DeletaUsuario(req.params.email)
      .then((feito)=> res.send(feito))
      .catch((erro)=> res.send(erro))
      
   })
   
   //atualiza usuario de acordo com o email passado como parametro 
   // function atualizaUsuario(parametro, body, banco){
   //    for(let usuario of banco){
   //       if(usuario.email === parametro){
   //          usuario.nome = body.nome
   //          usuario.email = body.email
   //          usuario.senha = body.senha 
   //       }
   //    }
   
   // }
   app.put('/usuarios/:email', (req, res)=>{
      
      const parametro = [req.body.NOME, req.body.EMAIL, req.body.SENHA, req.params.email]
      DaoUsuarios.AtualizaUsuario(parametro)
      .then((feito)=> res.send(feito))
      .catch((erro)=> res.send(erro))
      
      
   })
   
   
   
}   