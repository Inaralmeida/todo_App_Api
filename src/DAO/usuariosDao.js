const Usuarios = require('../models/usuarios')
const bd = require('../infra/sqlite-db')

module.exports= class UsuariosDao{
    
    constructor(bd){
        this.bd = bd;
    }
    
    listaUsuarios(){
        return new Promise ((resolve, reject) =>{
            this.bd.all('SELECT * FROM USUARIOS', (error, linhas)=>{
                if (error) reject (`Erro ao rodar consulta: ${error}`)
                else resolve (linhas)
            }) 
        })
        
    }
    
    AdicionaUsuario(body){
        return new Promise((resolve, reject) =>{
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?,?,?)", 
            [body.NOME, body.EMAIL, body.SENHA],
            (erro)=>{
                if(erro) reject (`Erro ao inserir: ${erro}`)
                else resolve(`Usuario ${body.NOME} adicionado`) 
            })
        })
    };

    BuscaUsuario(params){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS WHERE EMAIL = (?)', [params], (erro, user)=>{
                if(erro) reject (`Usuario ${parametro} não encontrado`)
                else {
                    console.log(user)
                    resolve (user)
                }
            } )
        })
    }

    DeletaUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('DELETE FROM USUARIOS WHERE EMAIL = (?)', [parametro], (erro, user)=>{
                if(erro){
                    reject (`Usuario ${parametro} não encontrado, erro ${erro}`)
                }
                else {
                    resolve(`Usuario ${parametro} deletado`)
                }
            })
        })
    }

    AtualizaUsuario(body, parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('UPDATE USUARIOS  SET ID =(?), NOME = (?), EMAIL = (?), SENHA = (?)  WHERE (?)', 
            [body.ID], [body.NOME], [body.EMAIL], [body.SENHA], [parametro], (erro, usuario)=>{
                
                if(erro){
                    reject(`Usuario ${parametro} não encontrado erro: ${erro}`)
                }else{
                    resolve(`Os dados do usuario <strong>${parametro}</strong> foram atualizados com sucesso`)
                }
            })
        })
    }
}