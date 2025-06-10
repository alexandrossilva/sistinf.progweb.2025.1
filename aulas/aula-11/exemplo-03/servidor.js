const http = require("http");           // importação de módulo

// criação de aplicação servidora indicando-se função callback com declaração 
// baseada em expressão arrow function e a ser executada a cada nova requisição HTTP
const server = http.createServer((request, response) => {
    console.log('Servidor acessado!');  // exibição de mensagem no console
});

// indicação de porta para a qual deverão ser remetidas requisições HTTP
server.listen(3000);