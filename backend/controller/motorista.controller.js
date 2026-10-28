const Motorista = require('../models/Motorista')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if (!valores.nome || !valores.CNH || !valores.cpf || !valores.telefone) {
        return res.status(400).json({message: 'Todos os dados são obrigatorios'})
    }

    try {
        const CNHCriptografada = CryptoJS.AES.encrypt(valores.CNH, CHAVE_SECRETA).toString()
        const cpfCriptografada = CryptoJS.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()
    
        await Motorista.create({
            nome: valores.nome,
            CNH: CNHCriptografada,
            cpf: cpfCriptografada,
            telefone: valores.telefone
        })

        return res.status(200).json({message: 'Motorista criado com sucesso'})
        
    } catch (err) {
        console.error('Erro ao cadastrar Motorista')
        return res.status(500).json({message: 'Erro ao criar Motorista'})
    }
}

module.exports = {cadastrar}