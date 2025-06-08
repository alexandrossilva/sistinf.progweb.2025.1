let numeros = [];   // array global de números

// operação de entrada e inclusão de número em array (além de atualização de soma e média)
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

            numeros.push(n);                // inclusão de número em array
    
            // obtenção de campo usado para exibição de números
            let campoNum = document.getElementById("numeros");

            if (campoNum.value != "") {     // se já houver números exibidos no campo...
                campoNum.value += ", ";     // atualização de texto do campo com caracteres de pontuação
            }

            // atualização de texto do campo incluindo-se novo número digitado
            campoNum.value += n;

            let soma = 0;                   // totalizador de números

            // iteração entre os números armazenados no array
            for (let i = 0; i < numeros.length; i++) {
                soma += numeros[i];         // acréscimo, à totalização, de enésimo número
            }

            // atualização de soma de números exibidos em campo de texto
            document.getElementById("soma").value = soma;

            // atualização de média de números exibidos em campo de texto
            document.getElementById("media").value = soma / numeros.length;
        }

    }
}

// associação da execução de função com evento de clique em botão
document.getElementById("btn-adicionar").addEventListener("click", adicionarNumero);
