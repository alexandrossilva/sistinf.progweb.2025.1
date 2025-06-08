function verificar() {
    // obtenção de texto digitado (convertido para maiúsculo)
    let texto = document.getElementById("texto").value.trim().toUpperCase();
    let textoTemp = "";

    if (texto == "") {  // se não houver texto digitado...
        alert("Nenhum texto informado!");
    }
    else {
        // obtenção de string com caracteres em ordem inversa àquela do texto digitado
        for (let i = texto.length - 1; i >= 0; i--) {
            textoTemp += texto.charAt(i);
        }

        // exibição de janela popup de alerta com mensagem de acordo com resultado da
        // comparação entre texto original e texto com ordem de caracteres invertida
        if (textoTemp == texto) {
            alert("O texto informado representa um palíndromo!");
        }
        else {
            alert("O texto informado não representa um palíndromo!");
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", verificar);