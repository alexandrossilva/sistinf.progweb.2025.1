// solicitação de entrada de dois textos
let n1 = prompt(`Digite um número:`);
let n2 = prompt(`Digite outro número:`);

// se usuário não confirmar entrada de ambos os textos...
if (n1 == null || n2 == null) {
    alert(`Um ou ambos os números solicitados não foram informados!`)
}
// se um ou ambos os textos fornecidos não forem números...
else if (isNaN(n1) || isNaN(n2)) {
    alert(`Um ou ambos os números não foram informados corretamente!`)
}
// caso contrário...
else {
    // obtenção de números de ponto flutuante a partir de textos fornecidos pelo usuário
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    let diferenca;
    if (n1 > n2) {              // se primeiro número maior que segundo número...
        diferenca = n1 - n2;    // diferença entre primeiro e segundo número
    }
    else {                      // caso contrário...
        diferenca = n2 - n1;    // diferença entre segundo e primeiro número
    }

    // exibição de caixa de diálogo de alerta com a diferença entre números
    alert(`Diferença entre ${n1} e ${n2}: ${diferenca}`);
}