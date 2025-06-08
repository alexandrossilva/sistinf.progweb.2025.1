// acréscimo de uma imagem ao corpo do documento
function adicionarImagemBrasil() {
    // obtenção de referência de elemento div
    let div = document.querySelector("div");

    // criação de nova imagem (elemento img)
    let imagem = document.createElement("img");

    // definição de atributo (src) de imagem para fins de indicação da caminho de arquivo que contém a imagem
    imagem.setAttribute("src", "imagens/brasil.jpeg");

    // acréscimo da imagem ao div
    div.appendChild(imagem);

    console.log("Adicionado!");
}

// recuperação de referências de botão
let botao = document.querySelector("button");

// associação de evento de clique no botão com execução de função de acréscimo de imagem
botao.addEventListener("click", adicionarImagemBrasil);