// processamento de operação (soma, subtração, multiplicação ou divisão)
function calcular() {
    // obtenção de números informados em formulário
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    // verificação de preenchimento de números em formulário
    if (!n1 || !n2) {
        alert("Um ou ambos os números não estão informados!");
    }
    // validação de números informados em formulário
    else if (isNaN(n1) || isNaN(n2)) {
        alert("Um ou ambos os números não estão informados corretamente!");
    }
    else {
        // conversão para números reais correspondentes
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        // obtenção de operação selecionada em formulário
        let op = document.getElementById("op").value;

        // execução de operação e atualizado de campo de texto de formulário
        switch(op) {
            case "+": document.getElementById("r").value = n1 + n2; break;
            case "-": document.getElementById("r").value = n1 - n2; break;
            case "*": document.getElementById("r").value = n1 * n2; break;
            case "/": document.getElementById("r").value = n1 / n2; break;
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", calcular);