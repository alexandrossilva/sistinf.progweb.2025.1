const express = require("express");
const moment = require("moment");

const QTD = 10;
const MIN = 1;
const MAX = 100;

const getNumeroRandomico = (min, max) => {
    min = Math.ceil(min);                                   // maior inteiro inferior ao mínimo
    max = Math.floor(max);                                  // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min;   // retorno de número pseudoaleatório
}

const getSequenciaNumeros = (qtd) => {
    let sequencia = "";

    for (let i = 0; i < qtd; i++) {
        sequencia += `${getNumeroRandomico(MIN, MAX)}\n`;        
    }

    return sequencia;
}

// registro de log de requisição
const logRequisicao = (res, resp, next) => {
    // obtenção de data e horário corrente formatada usando pacote (moment)
    const dataHorario = moment().format("DD/MM/YYYY hh:mm:ss");

    // listagem de data/horário corrente e recurso requisitado em console
    console.log(`[${dataHorario}] => Requisição de Recurso [${res.url}]`);
    
    // execução de próxima função middleware
    next();
}

const app = express();                                      // criação de aplicação Express

app.use(logRequisicao);

app.get("/", (req, resp) => {
    let qtd = req.query.qtd;

    if (!qtd || isNaN(qtd)) {
        qtd = QTD;
    }

    resp.end(getSequenciaNumeros(qtd));
});

app.listen(3000);