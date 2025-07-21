const express = require("express");

const app = express();

const QTD = 10;
const MIN = 1;
const MAX = 100;

const getNumeroRandomico = (min, max) => {
    min = Math.ceil(min);                                  // maior inteiro inferior ao mínimo
    max = Math.floor(max);                                 // menor inteiro superior ao máximo
    return Math.floor(Math.random() * (max - min)) + min;  // retorno de número pseudoaleatório
}

app.get("/", (req, resp) => {
    let sequencia = "";

    for (let i = 0; i < QTD; i++) {
        sequencia += `${getNumeroRandomico(MIN, MAX)}\n`;        
    }

    resp.end(sequencia);
});

app.listen(3000);