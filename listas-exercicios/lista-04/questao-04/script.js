// processamento de operação (soma, subtração, multiplicação ou divisão)
function testarPrimo() {
    // obtenção de número informado em formulário
    let n = document.getElementById("n").value;

    // verificação de preenchimento de número em formulário
    if (!n) {
        alert("Número não informado!");
    }
    // validação de número informado em formulário
    else if (isNaN(n)) {
        alert("Número não informado corretamente!");
    }
    else {
        n = parseInt(n);            // conversão para número inteiro correspondente

        let ehPrimo = true;         // assunção inicial de que número é primo

        // identificadores de divisores distintos de 1 e o próprio número até que algum seja encontrado
        for (let i = 2; i < n && ehPrimo; i++) {
            if (n % i == 0) {       // se enésimo número for divisor...
                ehPrimo = false;    // número não é primo
            }
        }

        // exibição de caixa de diálogo de alerta informando resultado da verificação
        if (ehPrimo) {
            alert(`${n} é um número primo!`);
        }
        else {
            alert(`${n} não é um número primo!`);
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", testarPrimo);