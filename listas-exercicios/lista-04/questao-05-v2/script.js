let numeros = [];   // array global de números

// operação de entrada e inclusão de número em array
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
        }

    }
}

// processamento e exibição de soma de números adicionados
function somarNumeros() {
    if (numeros.length == 0) {      // verificação de inexistência de números em array global
        alert("Não há numeros adicionados!");
    }
    else {
        let soma = 0;               // totalizador de números

        // iteração entre os números armazenados no array
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];     // acréscimo, à totalização, de enésimo número
        }

        // exibição de totalização através de caixa pop-up de alerta
        alert(`Soma de números adicionados: ${soma}`);

        return soma;                // retorno de totalização de números
    }
}

// processamento e exibição de soma de números adicionados
function calcMediaNumeros() {
    if (numeros.length == 0) {      // verificação de inexistência de números em array global
        alert("Não há numeros adicionados!");
    }
    else {
        let soma = 0;               // totalizador de números

        // iteração entre os números armazenados no array
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];     // acréscimo, à totalização, de enésimo número
        }
        
        let media = soma / numeros.length;  // média de números

        // exibição de média através de caixa pop-up de alerta
        alert(`Soma de números adicionados: ${media}`);
    }
}

// associação da execução de funções com eventos de cliques em botões
document.getElementById("btn-adicionar").addEventListener("click", adicionarNumero);
document.getElementById("btn-somar").addEventListener("click", somarNumeros);
document.getElementById("btn-media").addEventListener("click", calcMediaNumeros);