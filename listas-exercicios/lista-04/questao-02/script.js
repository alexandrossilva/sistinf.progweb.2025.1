// processamento de maior número
function maiorNumero() {
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
        n1 = parseInt(n1);
        n2 = parseInt(n2);

        let maior = n1 > n2 ? n1 : n2;      // identificação de maior número

        alert(`Maior número: ${maior}`);    // exibição de maior número
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", maiorNumero);