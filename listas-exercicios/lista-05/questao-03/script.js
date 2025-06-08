// identificação de tamanho de nome em caracteres (par ou ímpar)
function identificarTamanhoNome() {
    // obtenção de nome digitado em campo de texto
    let nome = document.getElementById("nome").value.trim();

    // se nome representar string vazia...
    if (nome == "") {
        alert("Informe seu nome!");
    }
    // se texto digitado conter sobrenome ou mais de um nome,
    // via identificação de existência de caracteres de espaço
    else if (nome.indexOf(" ") != -1) {
        alert("Informe apenas seu primeiro nome!");
    }
    else {
        let tam = nome.length;  // quantidade de caracteres de nome

        // exibição de janela popup de alerta com mensagem de acordo com quantidade de caracteres
        if (tam % 2 == 0) {
            alert("Seu nome possui uma quantidade par de caracteres!");
        }
        else {
            alert("Seu nome possui uma quantidade ímpar de caracteres!");
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", identificarTamanhoNome);