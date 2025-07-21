const express = require("express");

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

const app = express();                                      // criação de aplicação Express

app.use(express.static("public"));

app.get("/", (req, resp) => {
    let qtd = req.query.qtd;

    if (!qtd || isNaN(qtd)) {
        qtd = QTD;
    }

    resp.end(getSequenciaNumeros(qtd));
});

app.listen(3000);