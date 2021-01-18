module.exports = (app) => app.get ('/usuarios', (req, res) => {
    res.send(`Rastreamento da aplicação sendo feito com nodemon`)
  })

  module.exports =(app) => app.post ('/usuarios', (req, res) => {
    res.send(`Usuario adicionado ao banco de dados`)
  })