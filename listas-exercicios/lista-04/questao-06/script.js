let totalNumeros = 0;   // totalizador de números até então adicionados
let qtdNumeros = 0;     // quantidade de números até então adicionaos

// operação de entrada e inclusão de número (além de atualização de soma e média)
function adicionarNumero() {
    // obtenção de número através de caixa pop-up de entrada
    let n = prompt("Informe um número:");
    
    // verificação de confirmação de entrada de número
    if (n) {
        // validação de número informado
        if (isNaN(n)) {
            alert("Número não informado corretamente!");
        }
        else {
            n = parseFloat(n);              // conversão para número real correspondente

            totalNumeros += n;              // atualização de totalizador de números
            qtdNumeros++;                   // atualização de quantidade de números

            // obtenção de campo usado para exibição de números
            let campoNum = document.getElementById("numeros");

            if (campoNum.value != "") {     // se já houver números exibidos no campo...
                campoNum.value += ", ";     // atualização de texto do campo com caracteres de pontuação
            }

            // atualização de texto do campo incluindo-se novo número digitado
            campoNum.value += n;

            // atualização de soma de números exibidos em campo de texto
            document.getElementById("soma").value = totalNumeros;

            // atualização de média de números exibidos em campo de texto
            document.getElementById("media").value = totalNumeros / qtdNumeros;
        }

    }
}

// associação da execução de função com evento de clique em botão
document.getElementById("btn-adicionar").addEventListener("click", adicionarNumero);