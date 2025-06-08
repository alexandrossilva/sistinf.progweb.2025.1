function processarNumero() {
    // entrada de número através de caixa pop-up de entrada
    let n = prompt("Número:");

    if (n && !isNaN(n)) {   // se fornecido número válido...
        n = parseInt(n);    // conversão para inteiro correspondente

        // verificação de divisibilidade de inteiro por 3 e 5
        if (n % 3 == 0 && n % 5 == 0) {
            alert(`${n} é múltiplo simultâneo de 3 e 5!`);
        }
        else {
            alert(`${n} não é múltiplo simultâneo de 3 e 5!`);
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", processarNumero);