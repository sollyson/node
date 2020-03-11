console.log ("Olá mundo!!!!")

// criar a identidade do projeto npm init
/* observar que foi criado o arquivo package.json (JavaScript Object Notation)
que contem informações do projeto.*/
// Instalar o framework de node -> express
// executar o comando: npm install 

let express = require('express') //importando o modulo express
{
    let app = express()
    let port = 3000;
    
    app.get('/', (req,res) =>
    {
        res.setEncoding("<h1>Home</h1")
    })

    app.listen(port, () =>
    {
        console.log(`Servidor roando em http://localhost:${port}`)
        console.log("Para derrubar servidor: ctrl+c")
    })
}