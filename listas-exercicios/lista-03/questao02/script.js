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
    // obtenção de inteiros a partir de textos fornecidos pelo usuário
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    // realização de operações aritméticas
    let soma = n1 + n2;             // soma dos números
    let produto = n1 * (n2 * n2);   // produto do primeiro número pelo quadrado do segundo
    let quadrado = n1 * n1;         // quadrado do primeiro número
    let modulo = n1 % n2;           // módulo da divisão do primeiro número pelo segundo número

    // exibição de caixa de diálogo de alerta com as distâncias equivalentes
    alert(`Soma de ${n1} e ${n1}: ${soma}\n` + 
          `Produto de ${n1} pelo quadrado de ${n2}: ${produto}\n` + 
          `Quadrado de ${n1}: ${quadrado}\n` +
          `Módulo da divisão de ${n1} por ${n2}: ${modulo}`);
}