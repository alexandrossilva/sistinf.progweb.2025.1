// solicitação de entrada de dois textos que representam valores númericos
let n1 = prompt(`Digite um número:`);
let n2 = prompt(`Digite outro número:`);

// solicitação de entrada de texto que represente operação aritmética básica a executar
let op = prompt(`Qual operação deverá ser executada com os números digitados?\n` +
                `Em caso de soma, digite "+"\n` +
                `Em caso de subtração, digite "-"\n` +
                `Em caso de multiplicação, digite "*"\n` +
                `Em caso de divisão, digite "/"\n`);

// se usuário não confirmar entrada de ambos os textos...
if (n1 == null || n2 == null) {
    alert(`Um ou ambos os números solicitados não foram informados!`)
}
// se um ou ambos os textos fornecidos não forem números...
else if (isNaN(n1) || isNaN(n2)) {
    alert(`Um ou ambos os números não foram informados corretamente!`)
}
// se operador não ter sido informado corretamente...
else if (op != '+' && op != '-' && op != '*' && op != '/') {
    alert(`Operador não informado corretamente!`)
}
// caso contrário...
else {
    // obtenção de números de ponto flutuante a partir de textos fornecidos pelo usuário
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    let r;                      // resultado da operação a ser executada

    // execução de operação fornecida pelo usuário
    switch(op) {
        case '+': r = n1 + n2; break;
        case '-': r = n1 - n2; break;
        case '*': r = n1 * n2; break;
        case '/': r = n1 / n2; break;
    }

    // exibição de caixa de diálogo de alerta com o resultado da operação
    alert(`Operação: ${n1} ${op} ${n2} = ${r}`);
}