let totalNumeros = 0;   // totalizador de números até então adicionados
let qtdNumeros = 0;     // quantidade de números até então adicionaos

// operação de entrada e inclusão de número
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
        }

    }
}

// exibição e retorno de soma de números adicionados
function somaNumeros() {
    if (qtdNumeros == 0) {      // verificação de inexistência de números adicionados
        alert("Não há numeros adicionados!");
    }
    else {
        // exibição de totalização através de caixa pop-up de alerta
        alert(`Soma de números adicionados: ${totalNumeros}`);
    }
}

// processamento e exibição de soma de números adicionados
function mediaNumeros() {
    if (qtdNumeros == 0) {                  // verificação de inexistência de números adicionados
        alert("Não há numeros adicionados!");
    }
    else {
        let media = totalNumeros / qtdNumeros;  // média de números

        // exibição de média através de caixa pop-up de alerta
        alert(`Média de números adicionados: ${media}`);
    }
}

// associação da execução de funções com eventos de cliques em botões
document.getElementById("btn-adicionar").addEventListener("click", adicionarNumero);
document.getElementById("btn-somar").addEventListener("click", somaNumeros);
document.getElementById("btn-media").addEventListener("click", mediaNumeros);