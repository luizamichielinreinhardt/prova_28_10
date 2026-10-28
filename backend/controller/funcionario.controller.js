const Funcionario = require('../models/Funcionario')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if (!valores.nome || !valores.email || !valores.senha) {
        return res.status(400).json({message: 'Todos os dados são obrigatorios'})
    }

    try {
        const senhaCriptografada = CryptoJS.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()
    
        await Funcionario.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCriptografada
        })

        return res.status(200).json({message: 'Funcionario criado com sucesso'})
        
    } catch (err) {
        console.error('Erro ao cadastrar Funcionario')
        return res.status(500).json({message: 'Erro ao criar funcionario'})
    }
}

module.exports = {cadastrar}