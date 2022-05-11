//importar o pacote express
const express = require("express")
//executar o express 
const app = express()
//definir a porta do servidor
const porta = process.env.PORT || 3030

module.exports = {app,porta}


