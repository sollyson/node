var http = require ("http")

http.createServer(function(requisicao, resposta) 
{
    resposta.end("<h1 style= 'color:blue;'>Bem vindo ao meu site!</h1>")
}).listen(3000);

//Com isso crio um servidor

console.log("Meu servidor está rodando");
// posso subir este código para um servidor e todo mundo poderia executar este código