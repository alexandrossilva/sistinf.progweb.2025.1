const express = require("express");

const app = express();

const getTermoSerieFibonacci = (n) => {
    if (n == 1)
        return 0;
    else if (n == 2)
        return 1;
    else {
        let a = 0;
        let b = 1;
        let prox;

        for (let i = 2; i <= n; i++) {
            prox = a + b;
            a = b;
            b = prox;
        }

        return prox;
    }
}

app.get("/fibonacci", (req, resp) => {
    let n = req.query.n;

    if (!n || isNaN(n)) {
        resp.end("Posição de termo não indicado ou inválido!")
    }
    else {
        resp.end(`${getTermoSerieFibonacci(n)}`);
    }

});

app.listen(3000);