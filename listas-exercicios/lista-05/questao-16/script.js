// visualização ou ocultação de campo de entrada de código hexadecimal de cor
function visualizarEntradaCorManual() {
    // verificação de seleção de opção de cor correspondente à "outra cor"
    let isEntradaManual = document.getElementById('cor').value == 'manual';

    // atualização de propriedade de visualização de acordo com seleção ou não da opção "outra cor"
    document.getElementById('divCorManual').style.display = isEntradaManual ? 'flex' : 'none';

    // foco em campo de código hexadecimal de cor se opção selecionada for "outra cor"
    if (isEntradaManual)
        document.getElementById('codigoCor').focus();
}

// alteração de cor do texto do hino nacional
function alterarCor() {
    // obtenção de opção de cor selecionada (azul, verde, vermelho ou outra cor)
    let cor       = document.getElementById('cor').value;

    // obtenção de código hexadecimal de cor (se informada)
    let codigoCor = document.getElementById('codigoCor').value.trim();

    // validação de código de cor quando opção selecionada corresponde à "outra cor"
    if (cor == 'manual' && codigoCor == '')
        alert('Cor primária não selecionada ou em formato RGB não informada!');
    else {
        // atualização de código de cor se opção selecionada por azul, verde ou vermelho
        codigoCor = cor != 'manual' ? cor : codigoCor;

        // obtenção de todos os elementos de parágrafo da página
        let elementos = document.querySelectorAll('h1, p');

        // atualização de propriedade de cor de cada parágrafo
        for (let i=0; i<elementos.length; i++)
            elementos[i].style.color = codigoCor;
    }
}

// associação de execução de funções com eventos em controles de formulário
document.querySelector("select").addEventListener("change", visualizarEntradaCorManual);
document.querySelector("button").addEventListener("click", alterarCor);