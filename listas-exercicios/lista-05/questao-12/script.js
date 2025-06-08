// array com nomes de países
let paises = ["Argentina", 
              "Bolívia",
              "Brasil",
              "Chile",
              "Colômbia",
              "Equador",
              "Guiana",
              "Paraguai",
              "Peru",
              "Suriname",
              "Uruguai",
              "Venezuela"];

// carregamento de opções de menu suspenso de nomes de países
function loadOpcoesPaises() {
    // obtenção de menu suspenso
    let campoSelecao = document.getElementById("pais");

    // criação de elemento de marcação de opção com rótulo vazio
    let opcaoDefault = document.createElement("option");
    opcaoDefault.setAttribute("value", -1);
    opcaoDefault.append(document.createTextNode(""));

    // inclusão de opção com rótulo vazio em menu suspenso
    campoSelecao.appendChild(opcaoDefault);

    // inclusão de opções com nomes de países em menu suspenso
    for (let i = 0; i < paises.length; i++) {
        // criação de elemento de marcação de opção para o enésimo nome
        let opcaoPais = document.createElement("option");
        opcaoPais.setAttribute("value", i);
        opcaoPais.append(document.createTextNode(paises[i]));

        // inclusão de opção criada em menu suspenso
        campoSelecao.appendChild(opcaoPais);
    }
}

// atualização de imagem de bandeira de acordo com país selecionado
function loadBandeira() {
     // obtenção de índice de nome de pais selecionado
     let pais = document.getElementById("pais").value;

    if (pais != -1) {
        // nome de país com base em índice de opção selecionada e após remoção de acentos (além de conversão para minúsculo)
        let nomePais  = paises[parseInt(pais)].toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");

        // obtenção de elemento de marcação de imagem da bandeira        
        let imagem = document.querySelector("img");

        if (!imagem) {  // se não houver imagem no corpo da página...
            // criação de elemento de marcação de imagem
            imagem = document.createElement("img");

            // inclusão de elemento de imagem em corpo da página
            document.body.appendChild(imagem);
        }
        // atualização de atributo indicador de localização da imagem
        imagem.setAttribute("src", `imagens/${nomePais}.png`);
    }
}

// obtenção de menu suspenso de seleção de países
let campoSelecao = document.querySelector("select");

// associação de execução de função com evento de mudança de opção selecionada em menu suspenso
campoSelecao.addEventListener("change", loadBandeira);

// atualização de opções de menu suspenso de nomes de países ao final do carregamento de página
window.addEventListener("load", loadOpcoesPaises);