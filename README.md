# ToDo API

API aplicando o método Todo como um gerenciador de tarefas, um App de tarefas baseado na metodologia kanbam.
Projeto estruturado através da arquitetura REST.
Um gerenciador de tarefas que através de um forms você indica a o nome do usuario, email e senha 
e a tarefa que deseja adicionar com titulo, descrição, status e data de criação
como funciona
A api está no padãro REST então você consegue utilizar através de rotas GET, POST, PUT e DELETE.
De acordo com a rota você pode apenas visualiar os dados, alterar, inserir ou deletar.

## 🚀 Começando

O primeiro passo é instalar as dependencias do projeto, no terminal começe com NPM INSTALL -Y para instalar as dependencias do projeto, em seguida NPM START para iniciar o servidor

## ⚙️ Executando os testes

Para testar as rotas utilize os caminhos:

Visualizar todos os usuarios: GET/usuarios

Visualizar todas as tarefas: GET/tarefas

Visualizar usuario com parametro de busca: GET/usuarios/email

Visualizar tarefa com parametro de busca: GET/tarefas/titulo

Adicionar Usuario: POST/usuarios

Adicionar Tarefas: POST/Tarefas

Atualizar usuarios: PUT/usuarios/email

Atualizar tarefas: PUT/tarefas/titulo

Deletar usuario: DELETE/usuarios/email

Deletar tarefa: DELETE/tarefas/titulo

# 🚀 Deploy

Você pode acessar as rotas diretamente do link: https://stark-springs-00078.herokuapp.com/usuarios

## 🛠️ Construído com

* Node.js
* Express
* Body-parse
* Sqlite

## ✒️ Autor

* **Inara Almeida** - *Desenvolvimento* - [Inaralmeida](https://github.com/Inaralmeida)

---