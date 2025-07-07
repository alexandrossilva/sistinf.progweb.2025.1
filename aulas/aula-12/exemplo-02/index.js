const express = require("express");

const app = express();

app.get("/olamundo", (request, response) => {
    // definição de cabeçalho com tipo de conteúdo de resposta incluindo-se codificação de caracteres
    response.setHeader('Content-type', 'text/html;charset=utf-8');

    // envio de string como resposta da requisição e indicação de finalização da mensagem de resposta
    response.send('<h1>Olá Mundo</h1>')
});

app.get("/horario-atual", (request, response) => {
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
    response.send(`${cumprimento}, agora são ${hor}:${min}:${seg}`)
});

app.get("/num/:numId", (request, response) => {
    console.log(request.params);
    const numId = request.params.numId;

    // definição de cabeçalho com tipo de conteúdo de resposta incluindo-se codificação de caracteres
    response.setHeader('Content-type', 'text/plain;charset=utf-8');

    // envio de mensagem de cumprimento e horário como resposta da requisição e 
    // indicação de finalização da mensagem de resposta
    response.send(`Número enviado: ${numId}`)
});

app.listen(3000);