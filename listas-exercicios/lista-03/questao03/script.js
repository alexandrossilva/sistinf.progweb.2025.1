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

    if (n1 == n2) {         // se números forem iguais...
        alert(`Ambos os números digitados são iguais!`);
    }
    else {                  // caso contrário (números digitados diferentes)...
        let maior;
        if (n1 > n2) {      // se primeiro número maior que segundo número...
            maior = n1;     // maior é o primeiro número
        }
        else {              // caso contrário...
            maior = n2;     // maior é o segundo número
        }

        // exibição de caixa de diálogo de alerta com o maior número
        alert(`Entre os números digitados, o maior é ${maior}`);
    }
}