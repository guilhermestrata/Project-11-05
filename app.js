//importar as configurações 
const servidor = require("./config/servidor")
//carregar o express 
const app = servidor.app
//carregar porta
const porta = servidor.porta
//carregar a rota index
const index = require('./routes/index')(app)
//ligar o servidor
app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})
