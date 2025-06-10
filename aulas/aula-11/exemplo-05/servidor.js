const http = require("http");           // importação de módulo

// criação de aplicação servidora indicando-se função callback com declaração 
// baseada em expressão arrow function e a ser executada a cada nova requisição HTTP
const server = http.createServer((request, response) => {
    // definição de cabeçalho com tipo de conteúdo de resposta incluindo-se codificação de caracteres
    response.setHeader('Content-type', 'text/html;charset=utf-8');

    // envio de string como resposta da requisição e indicação de finalização da mensagem de resposta
    response.end('<h1>Olá Mundo</h1>')
});

// indicação de porta para a qual deverão ser remetidas requisições HTTP
server.listen(3000);