const express = require("express");     // importação de módulo express

const app = express();                  // criação de aplicação express

app.use(express.static("public"));      // definição de diretório de conteúdos estáticos

app.get("/tempo-restante", (req, res) => {
    // definição de cabeçalho de tipo de resposta
    res.setHeader("Content-Type", "text/plain;charset=utf-8");

    let agora = new Date();             // obtenção de horário corrente

    // obtenção de quantidade de segundos decorridos desde o início do dia
    const segundosDecorridos = agora.getHours() * 60 * 60 + agora.getMinutes() * 60 + agora.getSeconds();

    // obtenção de quantidade de segundos restantes do dia
    let tempoRestante = 24 * 60 * 60 - segundosDecorridos;

    let formato = req.query.formato;    // obtenção de parâmetro de consulta

    if (formato == "hms") {             // se formato de tempo restante for hms (horas, minutos e segundos)
        let horasRestantes = Math.ceil(tempoRestante / (60 * 60));
        let minutosRestantes = Math.ceil(tempoRestante % (60 * 60) / 60);
        let segundosRestantes = Math.ceil(tempoRestante % 60);

        // envio de resposta de requisição com tempo restante em horas, minutos e segundos
        res.end(`Tempo Restante: ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}seg`);
    }
    else if (formato == "s") {          // caso contrário, se formato de tempo restante for em total de segundos...
        // envio de resposta de requisição com tempo restante em total de segundos
        res.end(`Tempo Restante: ${tempoRestante} segundo(s)`);
    }
    else {                              // caso contrário...
        // envio de resposta de requisição com indicação de formato de tempo não válido
        res.end(`Formato de tempo restante [${formato}] é desconhecido!`);
    }
})

app.listen(3000);           // ativação de servidor