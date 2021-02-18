const request = require('supertest')

test('Testando rota get de Tarefas', async()=>{

    await request('http://localhost:3030')
    .get('/tarefas')
    .expect(200)
    .then((response)=> ('Passou no teste'))
    

})

test('Testando rota post de Tarefas', async()=>{

    await request('http://localhost:3030')
    .post('/tarefas')
    .expect(200)
    .then((response)=> ('Passou no teste'))
    

})

test('Testando rota put de Tarefas', async()=>{

    await request('http://localhost:3030')
    .put('/tarefas/:titulo')
    .expect(200)
    .then((response)=> ('Passou no teste'))
    

})
test('Testando rota delete de Tarefas', async()=>{

    await request('http://localhost:3030')
    .delete('/tarefas/:titulo')
    .expect(200)
    .then((response)=> ('Passou no teste'))
    

})