// identificação de faixa etária
function identificarFaixaEtaria() {
    // obtenção de ano de nascimento a partir de texto digitado
    let ano       = document.getElementById("ano").value.trim();
    let dataAtual = new Date();     // obtenção de data e horário corrente

    // validação de ano de nascimento
    if (ano == "" || ano.length != 4 || isNaN(ano) || ano.indexOf(".") != -1) {
        alert("Ano não informado ou inválido!");
    }
    // validação de ano de nascimento posterior ao ano corrente
    else if (parseInt(ano) > dataAtual.getFullYear()) {
        alert("Ano informado superior ao ano corrente!");
    }
    else {
        // obtenção de diferença entre ano corrente e ano de nascimento
        let diff = dataAtual.getFullYear() - parseInt(ano);

        // exibição de janela popup de alerta de faixa etária (de acordo com diferença em anos)
        if (diff < 18) {
            alert("Sua Faixa Etária: Criança ou Adolescente");
        }
        else if (diff < 65) {
            alert("Sua Faixa Etária: Adulto(a)");
        }
        else {
            alert("Sua Faixa Etária: Idoso(a)");
        }
    }                        
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", identificarFaixaEtaria);