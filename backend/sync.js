const db = require('./db/conn')
const {Funcionario, Motorista, Carga, Entrega} = require('./models/rel')

async function syncDataBase() {
    try {
        await db.sync({force:true})
        console.log('Banco rodando')
    } catch (err) {
        console.error('erro ao rodar banco de dados',err)
    }finally{
        await db.close()
        console.log('Fechando o banco')
    }
}
syncDataBase()