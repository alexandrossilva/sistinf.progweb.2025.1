const http = require("http");           // importação de módulo

// criação de aplicação servidora indicando-se função callback com declaração 
// baseada em expressão arrow function e a ser executada a cada nova requisição HTTP
const server = http.createServer((request, response) => {
    const url = request.url;
    console.log(`[${url}]`);

    if (url == "/olamundo") {
        // definição de cabeçalho com tipo de conteúdo de resposta incluindo-se codificação de caracteres
        response.setHeader('Content-type', 'text/html;charset=utf-8');

        // envio de string como resposta da requisição e indicação de finalização da mensagem de resposta
        response.end('<h1>Olá Mundo</h1>')
    }
    else if (url == "/horario-atual") {
        let dt = new Date();        // data e horário corrente

        let hor = dt.getHours();    // extração de horas a partir de data e horário corrente
        if (hor < 10) {             // se horas inferior a 10 (dez)...
            hor = `0${hor}`;        // acréscimo de caractere '0'
        }

        let min = dt.getMinutes();  // extração de minutos a partir de data e horário corrente
        if (min < 10) {             // se minutos inferior a 10 (dez)...
            min = `0${min}`;        // acréscimo de caractere '0'
        }

        let seg = dt.getSeconds();  // extração de segundos a partir de data e horário corrente
        if (seg < 10) {             // se segundos inferior a 10 (dez)...
            seg = `0${seg}`;        // acréscimo de caractere '0'
        }
        
        let cumprimento;            // mensagem de cumprimento

        // definição de mensagem de cumprimento de acordo com horas
        if (hor < 12)      { cumprimento = "Bom Dia"; }
        else if (hor < 18) { cumprimento = "Boa Tarde"; }
        else               { cumprimento = "Boa Noite"; }

        // definição de cabeçalho com tipo de conteúdo de resposta incluindo-se codificação de caracteres
        response.setHeader('Content-type', 'text/plain;charset=utf-8');

        // envio de mensagem de cumprimento e horário como resposta da requisição e 
        // indicação de finalização da mensagem de resposta
        response.end(`${cumprimento}, agora são ${hor}:${min}:${seg}`)
    }

});

// indicação de porta para a qual deverão ser remetidas requisições HTTP
server.listen(3000);