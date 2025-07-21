const express = require("express");     // importação de módulo express
const MIN = 1;                          // menor inteiro a ser gerado de forma pseudoaleatório
const MAX = 100;                        // maior inteiro a ser gerado de forma pseudoaleatório

// obtenção de inteiro pseudoaleatório a partir de intervalo de inteiros
const getNumeroRandomico = (min, max) => {
  min = Math.ceil(min);                                     // maior inteiro inferior ao mínimo
  max = Math.floor(max);                                    // menor inteiro superior ao máximo
  return Math.floor(Math.random() * (max - min)) + min;     // retorno de número pseudoaleatório
}

const app = express();                  // criação de aplicação express

app.get("/numeros-aleatorios", (req, res) => {
    // definição de cabeçalho de tipo de resposta
    res.setHeader("Content-Type", "text/plain;charset=utf-8");

    let qtd = req.query.qtd;                                // obtenção de parâmetro de consulta

    if (!qtd) {                                             // se parâmetro de consulta não enviado...
        res.end("Não indicação de quantidade de números!"); // envio de resposta de requisição
    }
    else {
        let array = [];     // array de inteiros a serem gerados
        let dados = "";     // mensagem de dados contendo inteiros gerados

        // geração de inteiros enquanto não for alcançada quantidade pré-definida...
        while (array.length < qtd) {
            let n = getNumeroRandomico(MIN, MAX);       // geração de enésimo inteiro

            if (array.indexOf(n) == -1) {               // se enésimo inteiro não estiver inserido anteriormente em array...
                array.push(n);                          // inserção de inteiro em array
                dados += `${n}\n`;                      // atualização de mensagem de dados
            }
        }

        res.end(dados);                                 // envio de resposta de requisição
    }
})

app.listen(3000);           // ativação de servidor