let dt = new Date();        // data e horário corrente

let hor = dt.getHours();    // extração de horas a partir de data e horário corrente
if (hor < 10) {             // se horas inferior a 10 (dez)...
    hor = `0${hor}`;        // acréscimo de caractere '0'
}

let min = dt.getMinutes();  // extração de minutos a partir de data e horário corrente
if (min < 10) {             // se minutos inferior a 10 (dez)...
    min = `0${min}`;        // acréscimo de caractere '0'
}

let cumprimento;            // mensagem de cumprimento

// definição de mensagem de cumprimento de acordo com horas
if (hor < 12)      { cumprimento = "Bom Dia"; }
else if (hor < 18) { cumprimento = "Boa Tarde"; }
else               { cumprimento = "Boa Noite"; }

// exibição de mensagem de cumprimento e horário no console
console.log(`${cumprimento}, agora são ${hor}:${min}`);