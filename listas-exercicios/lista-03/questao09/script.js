let n = 3;                      // inteiro literal (3)
let qtd = 5;                    // quantidade de múltiplos
let multiplos = "";             // texto contendo múltiplos sepadados por vírgula

// obtenção de múltiplos de inteiro literal considerando quantidade definida anteriormente
for (let i = 1; i <= qtd; i++) {
    if (i > 1)                  // se enésimo múltiplo não for o primeiro deles...
        multiplos += ", ";      // concatenção com texto literal contendo vírgula

    // cálculo de enésimo múltiplo e concatenção do mesmo com os múltiplos anteriores
    multiplos += i * n;
}

// exibição de caixa de diálogo de alerta com múltiplos
alert(`Os ${qtd} primeiros múltiplos de ${n} são: ${multiplos}`);
