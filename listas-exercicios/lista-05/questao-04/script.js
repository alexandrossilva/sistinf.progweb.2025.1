// identificação de quantidade de vogais em texto digitado
function identificarVogais() {
    // obtenção de nome digitado em campo de texto
    let texto = document.getElementById("texto").value.trim();

    if (texto == "") {      // se texto digitado representar string vazia...
        alert("Texto não informado!");
    }
    else {
        // remoção de acentos de texto original (além de conversão para minúsculo)
        texto = texto.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();

        let vogais = 0;     // totalizador de vogais

        // iteração entre caracteres de texto
        for (let i = 0; i < texto.length; i++) {
            // validação de enésimo caracterre como vogal
            if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u") {
                vogais++;   // atualização de totalizador (se enésimo caractere for vogal)
            }
        }

        // atualização de conteúdo de parágrafo com quantidade de vogais identificadas
        document.getElementById("pVogais").innerHTML = `Quantidade de Vogais: ${vogais}`;
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", identificarVogais);