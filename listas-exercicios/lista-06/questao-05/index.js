const express = require("express");     // importação de módulo express

// dias da semana
const diasSemana = ["Doming", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const app = express();                  // criação de aplicação express

app.use(express.static("public"));      // definição de diretório de conteúdos estáticos

app.get("/info-instante-atual", (req, res) => {
    // definição de cabeçalho de tipo de resposta
    res.setHeader("Content-Type", "text/plain;charset=utf-8");

    let agora = new Date();             // obtenção de horário corrente

    let diaMes = agora.getDate();               // dia do mês
    let diaSemana = diasSemana[agora.getDay()]; // dia da semana
    let mes = agora.getMonth() + 1;             // mês
    let ano = agora.getFullYear();              // ano
    let horas = agora.getHours();               // horas   
    let minutos = agora.getMinutes();           // minutos
    let segundos = agora.getSeconds();          // segundos

    // inclusão de dígito zero à esquerda se necessário em dia, mês, horas, minutos e segundos
    if (diaMes < 10)    diaMes = `0${diaMes}`;
    if (mes < 10)       mes = `0${mes}`;
    if (horas < 10)     horas = `0${horas}`;
    if (minutos < 10)   minutos = `0${minutos}`;
    if (segundos < 10)  segundos = `0${segundos}`;

    let formato = req.query.formato;    // obtenção de parâmetro de consulta

    let instante = null

    switch(formato) {                   // definição de instante de acordo com parâmetro
        case "dma":     instante = `${diaMes}/${mes}/${ano}`; break;
        case "ds":      instante = `${diaSemana}`; break;
        case "dmahms":  instante = `${diaMes}/${mes}/${ano} ${horas}:${minutos}:${segundos}`; break;
        case "hms":     instante = `${horas}:${minutos}:${segundos}`; break;
    }

    if (instante != null) {
        // envio de resposta de requisição com indicação de formato de tempo não válido
        res.end(`Instante atual: ${instante}`);
    }
    else {                              // caso contrário...
        // envio de resposta de requisição com indicação de formato de tempo não válido
        res.end(`Formato de instante atual não indicado ou inválido: [${formato}]!`);
    }
})

app.listen(3000);           // ativação de servidor