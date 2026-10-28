const Carga = require('../models/Carga')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if (!valores.descricao || !valores.peso || !valores.volume || !valores.idMotorista || !valores.codRastreio) {
        return res.status(400).json({message: 'Todos os dados são obrigatorios'})
    }

    if (!idMotorista) {
        return res.status(400).json({message: 'Motorista informado nao existe'})
    }

    try {
        await Carga.create(valores)
        return res.status(200).json({message: 'Carga criado com sucesso'})
        
    } catch (err) {
        console.error('Erro ao cadastrar Carga')
        return res.status(500).json({message: 'Erro ao criar Carga'})
    }
}

module.exports = {cadastrar}