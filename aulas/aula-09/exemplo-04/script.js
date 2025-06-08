// exibição de valor associado à opção selecionada de campo de seleção
function mostrarSelecao() {
    // recuperação de referência de campo de seleção e, após isso, de valor de propriedade (value)
    let opcaoSelecionada = document.querySelector("select").value;

    // exibição de caixa de diálogo de alerta com valor associado à opção selecionada de campo de seleção
    alert(`Valor associado à opcao selecionada: ${opcaoSelecionada}`);
}

// recuperação de referências de botão
let botao = document.querySelector("button");

// associação de evento de clique no botão com execução de função declarada anteriormente
botao.addEventListener("click", mostrarSelecao)