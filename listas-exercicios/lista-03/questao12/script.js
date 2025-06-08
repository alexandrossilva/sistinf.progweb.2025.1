// solicitação de entrada de um texto que represente um número inteiro
let n = prompt("Digite um número:");

// se usuário confirmar entrada de texto...
if (n != null) {
    if (isNaN(n)) {                     // se texto fornecido não for um número...
        alert("Não é um número válido!");
    }
    else if (n <= 0) {                  // se número não for positivo...
        alert(`O número ${n} não é positivo!`);
    }
    else {                              // caso contrário...
        let divisores = [];             // array de divisores
        let somaDivisores = 0;          // soma de divisores

        // identificação de divisores entre 1 (um) menores que o próprio número
        for (let i = 1; i < n; i++) {
            // se resto de divisão de enésimo valor de contador por número for 0 (zero)...
            if (n % i == 0) {
                divisores.push(i);      // inclusão de enésimo valor de contador em array de divisores
                somaDivisores += i;     // atualização de soma de divisores
            }
        }

        // exibição de caixa de diálogo de alerta com sequência de divisores e média dos mesmos
        alert(`Divisores de ${n} menores que ele próprio: ${divisores}\n` +
              `Soma dos divisores de ${n}: ${somaDivisores}`);
    }
}