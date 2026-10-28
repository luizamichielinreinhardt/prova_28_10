const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')

require('./models/rel')

const funcionarioController = require('./controller/funcionario.controller')
const cargaController = require('./controller/carga.controller')
const motoristaController = require('./controller/motorista.controller')
const entregaController = require('./controller/entrega.controller')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/funcionario', funcionarioController.cadastrar)

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'Sistema de cargas'
    })
})

app.post('/motorista', motoristaController.cadastrar)
//app.delete('/motorista/:id', motoristaController.apagar)

app.post('/carga', cargaController.cadastrar)

app.post('/entrega', entregaController.cadastrar)
//app.put('/entrega/:id', entregaController.atualizar)

conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados!', err)
    })