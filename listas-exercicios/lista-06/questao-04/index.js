const express = require("express");     // importação de módulo express

// obtenção de enésimo termo da série de Fibonacci
const fibonacci = (i) => {
    if (i == 1)         return 0;   // retorno de primeiro termo
    else if (i == 2)    return 1;   // retorno de segundo termo
    else {                          // caso contrário...
        let a = 0;                  // definição de primeiro termo
        let b = 1;                  // definição de segundo termo
        let t;

        // obtenção de enésimo termo da série
        for (let pos = 3; pos <= i; pos++) {
            t = a + b;      // obtenção de termo seguinte a partir da soma dos dois termos anteriores
            a = b;          // atualização de penúltimo termo
            b = t;          // atualização de último termo
        }

        return t;                   // retornod de enésimo termo
    }
}

const app = express();                  // criação de aplicação express

app.use(express.static("public"));      // definição de diretório de conteúdos estáticos

app.get("/fibonacci", (req, res) => {

    const n = req.query.n;              // obtenção de parâmetro de consulta

    if (!n || isNaN(n) || n <= 0) {     // em caso de parâmetro inválido ou inexistente...
        // definição de cabeçalho de tipo de resposta
        res.setHeader("Content-Type", "text/plain;charset=utf-8");

        // envio de resposta de requisição com indicação de parâmetro inválido ou inexistente
        res.end(`Índice de termo não indicado ou inválido: [${n}]`);
    }                                   // caso contrário
    else {
        // definição de cabeçalho de tipo de resposta
        res.setHeader("Content-Type", "application/json;charset=utf-8");

        const termo = fibonacci(n);     // obtenção de termo

        res.end(JSON.stringify(termo));
    }
})

app.listen(3000);           // ativação de servidor