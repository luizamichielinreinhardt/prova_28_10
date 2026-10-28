const Entrega = require('../models/Entrega')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if (!valores.cidade || !valores.status || !valores.data || !valores.hora || !valores.idCarga) {
        return res.status(400).json({message: 'Todos os dados são obrigatorios'})
    }

    if (!idCarga) {
        return res.status(400).json({message: 'idCarga informado nao existe'})
    }

    try {
        await Entrega.create(valores)
        return res.status(200).json({message: 'Entrega criada com sucesso'})
        
    } catch (err) {
        console.error('Erro ao cadastrar Entrega')
        return res.status(500).json({message: 'Erro ao criar Entrega'})
    }
}

module.exports = {cadastrar}