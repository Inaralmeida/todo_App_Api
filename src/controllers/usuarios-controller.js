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
   app.post('/usuarios', async(req, res) => {

      try{

         const retornoAdicionaUsuarios = await DaoUsuarios.AdicionaUsuario(req.body)
         res.send(retornoAdicionaUsuarios)

      }catch(error){

         res.send(error)

      }
     
   }) 
   
   //mostra usuarios filtrado com parametro :email
   app.get ('/usuarios/:email', async (req, res) => {

      try{

         const retornoBuscaUsuario = await DaoUsuarios.BuscaUsuario(req.params.email)
         res.send(retornoBuscaUsuario)

      }catch(error){

         res.send(error)

      }

   })
   
   //deleta usuarios
   app.delete('/usuarios/:email', async (req, res)=> {
      
      try{

         const retornoDeletaUsuario = await DaoUsuarios.DeletaUsuario(req.params.email)
         res.send(retornoDeletaUsuario)

      }catch(error){

         res.send(error)

      }
      
   })
   
   //atualiza usuario de acordo com o email passado como parametro
   app.put('/usuarios/:email', async (req, res)=>{
      
      try{

         const parametro = [req.body.NOME, req.body.EMAIL, req.body.SENHA, req.params.email]
         const retornoAtualizaUsuario = await DaoUsuarios.AtualizaUsuario(parametro)
         res.send(retornoAtualizaUsuario)

      }catch(error){

         res.send(error)

      }
      
   })
   
}   