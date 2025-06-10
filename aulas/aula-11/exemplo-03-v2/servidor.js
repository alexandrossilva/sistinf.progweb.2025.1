const http = require("http");           // importação de módulo

// função callback a ser executada a cada nova requisição HTTP
function processarRequisicao(request, response) {
    console.log('Servidor acessado!');  // exibição de mensagem no console
}

// criação de aplicação servidora indicando-se função declarada anteriormente 
// como funçao callback a ser executada a cada nova requisição HTTP
const server = http.createServer(processarRequisicao);

// indicação de porta para a qual deverão ser remetidas requisições HTTP
server.listen(3000);