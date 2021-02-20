module.exports = class TarefasDao{
    constructor(bd){
        
        this.bd = bd;

    }

    listaTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all("SELECT * FROM TAREFAS", (erro, linhas)=>{
                if(erro) reject (`Erro ao rodar consulta ${erro}`)
                else resolve (linhas)
            })
        })
    }

    buscaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS WHERE TITULO=(?)', [parametro], (error, tarefa)=>{
                if(error) reject (`Tarefa ${parametro} não encontrada`)
                else resolve(tarefa)
            })
        })
    }
    adicionaTarefa(parametro){
        return new Promisse((resolve, reject)=>{
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO), VALUES(?,?,?,?)', [parametro[0], parametro[1], parametro[2], parametro[3]], (error, feito)=>{
                if(error) reject (`Erro ao adicionar tarefa ${parametro[0]}. [ERRO] ${error}`)
                else resolve(`Tarefa ${parametro[0]} adicionada `)
            })
        })
    }

    deletaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('DELETE FROM TAREFAS WHERE TITULO=(?)', [parametro], (error, feito)=>{
                if(error) reject(`Erro ao deleter tarefa ${parametro}`)
                else resolve (`Tarefa ${parametro} deletada`)
            })
        })
    }

    atualizaTarefa(parametro){
        return new Promise((resolve, reject)=>{
            const query = 'UPDATE TAREFAS  SET  TITULO =COALESCE(?,TITULO), DESCRICAO =COALESCE(?,DESCRICAO), STATUS =COALESCE(?,STATUS ), DATACRIACAO =COALESCE(?,DATACRIACAO ) WHERE TITULO= ?'
            this.bd.all(query, parametro, (error, feito)=>{
                if(error) reject ('Erro ao atualizar tarefa')
                else resolve ('Tarefa atualizada')
            })
        })
    }
}