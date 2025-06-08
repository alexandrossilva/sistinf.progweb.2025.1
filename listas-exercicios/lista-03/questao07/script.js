// solicitação de entrada de três notas na forma de textos
let n1 = prompt(`Digite 1ª nota:`);
let n2 = prompt(`Digite 2ª nota:`);
let n3 = prompt(`Digite 3ª nota:`);

// se usuário não confirmar entrada de todos os textos...
if (n1 == null || n2 == null || n3 == null) {
    alert(`Uma ou mais notas não foram informadas!`)
}
// se um ou mais textos fornecidos não forem números...
else if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert(`Uma ou mais notas não foram informadas corretamente!`)
}
// caso contrário...
else {
    // obtenção de números de ponto flutuante a partir de textos fornecidos pelo usuário
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    // média a partir do textos convertidos em números
    let media = (n1 * 1 + n2 * 1 + n3 * 2) / (1 + 1 + 2);

    if (media >= 6) {           // se média igual ou superior a 6 (seis)...
        alert(`Aprovação com média ${media}`);
    }
    else {                      // caso contrário...
        alert(`Reprovação com média ${media}`);
    }
}