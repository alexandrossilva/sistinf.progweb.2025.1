// soma de números inseridos em formulário
function somar() {
    let soma = 0;           // totalizador de números inseridos em formulário

    // recuperação de referências de campos de entrada de textos
    let inputs = document.querySelectorAll("input");

    // totalização de números inseridos em formulário
    for (let i = 0; i < inputs.length; i++) {
        let numero = inputs[i].value;       // recuperação de texto de enésimo campo de texto
        soma += parseInt(numero);           // conversão para inteiro e atualização de totalizador
    }

    // exibição de caixa de diálogo de alerta com a soma dos números
    alert(`Soma: ${soma}`);
}

// recuperação de referências de botão
let botao = document.querySelector("button");

// associação de evento de clique no botão com execução de função de soma de números
botao.addEventListener("click", somar);