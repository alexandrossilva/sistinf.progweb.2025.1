const http = require("http");           // importação de módulo http
const MIN = 1;                          // menor inteiro a ser gerado de forma pseudoaleatório
const MAX = 100;                        // maior inteiro a ser gerado de forma pseudoaleatório
const QTD = 10;                         // quantidade de inteiros a serem gerados

// obtenção de inteiro pseudoaleatório a partir de intervalo de inteiros
const getNumeroRandomico = (min, max) => {
  min = Math.ceil(min);                                     // maior inteiro inferior ao mínimo
  max = Math.floor(max);                                    // menor inteiro superior ao máximo
  return Math.floor(Math.random() * (max - min)) + min;     // retorno de número pseudoaleatório
}

const servidor = http.createServer((req, res) => {
    let array = [];     // array de inteiros a serem gerados
    let dados = "";     // mensagem de dados contendo inteiros gerados

    // geração de inteiros enquanto não for alcançada quantidade pré-definida...
    while (array.length < QTD) {
        let n = getNumeroRandomico(MIN, MAX);       // geração de enésimo inteiro

        if (array.indexOf(n) == -1) {               // se enésimo inteiro não estiver inserido anteriormente em array...
            array.push(n);                          // inserção de inteiro em array
            dados += `${n}\n`;                      // atualização de mensagem de dados
        }
    }

    // definição de cabeçalho de tipo de resposta
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(dados);                                 // envio de resposta de requisição
});

servidor.listen(3000);  // ativação de servidor