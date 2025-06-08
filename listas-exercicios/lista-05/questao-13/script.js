// carregamento de opções de números de calçados possíveis em campos de seleção
function loadOpcoesPares() {
    // obtenção de campos de seleção
    let camposSelecao = document.getElementsByTagName("select");
    
    for (let i = 0; i < camposSelecao.length; i++) {
        let campo = camposSelecao[i];      // enésimo campo de seleção

        // criação de novo elemento de opção com texto vazio
        let opcaoDefault = document.createElement("option");
        opcaoDefault.setAttribute("value", -1);
        opcaoDefault.append(document.createTextNode(""));

        campo.appendChild(opcaoDefault);    // inclusão de opção em campo de seleção
        
        // criação de elementos de opção para cada número de calçado entre 33 e 42
        for (let j = 33; j <= 42; j++) {
            // criação de novo elemento de opção com texto representado por enésimo número de calçado
            let opcaoTam = document.createElement("option");
            opcaoTam.setAttribute("value", j);
            opcaoTam.append(document.createTextNode(j));

            campo.appendChild(opcaoTam);    // inclusão de opção em campo de seleção
        }
    }
}

// identificação de pares completos possíveis de serem formados
function identificarParesCompletos() {
    // obtenção de elemento de divisão que contém imagens de pares
    let divParesCompletos = document.getElementById("paresCompletos");

    // remoção de imagens de pares
    while (divParesCompletos.firstChild)
        divParesCompletos.removeChild(divParesCompletos.firstChild);

    // arrays de totalização de quantidade de números de calçados para ṕé esquerdo e pé direito
    let qtdEsq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let qtdDir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // consulta de número de calçado de pé esquerdo e direito para cada um dos 5 (cinco) pares
    for (let i = 1; i <= 5; i++) {
        // número de pé esquerdo e direito de enésimo par
        let peEsq = document.getElementById(`peEsq${i}`).value;
        let peDir = document.getElementById(`peDir${i}`).value;
        
        // cancelamento de operação de identificação em caso de número de pé esquerdo não selecionado
        if (peEsq == -1) {
            alert("Há um ou mais campos não estão preenchidos!");
            break;
        }

        // cancelamento de operação de identificação em caso de número de pé direito não selecionado
        if (peDir == -1) {
            alert("Há um ou mais campos não estão preenchidos!");
            break;
        }

        // atualização de arrays de totalização de acordo com números de pé esquerdo e direito
        qtdEsq[parseInt(peEsq - 33)]++;
        qtdDir[parseInt(peDir - 33)]++;

    }

    // comparação entre quantidade de calçados de pé esquerdo e direito de cada número
    for (let i = 0; i < 10; i++) {
        // se houver calçados de enésimo número para pé esquerdo e direito...
        if (qtdEsq[i] > 0 && qtdDir[i] > 0) {
            // identificação de quantidade de pares de enésimo número possíveis de serem formados
            var qtdPares = qtdEsq[i] < qtdDir[i] ? qtdEsq[i] : qtdDir[i];

            // inclusão de imagem representado de calçado de enésimo número para cada par formado
            for (let j = 0; j < qtdPares; j++) {
                // criação de elemento de imagem
                let imgPar = document.createElement("img");
                imgPar.setAttribute("src", `imagens/par-${(i + 33)}.png`);

                // inclusão em elemento de divisão que contém imagens de pares
                divParesCompletos.appendChild(imgPar);
            }
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", identificarParesCompletos);

// atualização de opções de pares de calçados em menus suspensos ao final do carregamento de página
window.addEventListener("load", loadOpcoesPares);