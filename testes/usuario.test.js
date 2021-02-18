const request = require('supertest')

test('Testando rota get de Usuarios', async()=>{

    await request('http://localhost:3030')
    .get('/usuarios')
    .expect(200)
    .then((response)=> console.log('Passou no teste'))
    

})