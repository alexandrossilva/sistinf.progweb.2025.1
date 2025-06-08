// conversão de distância em metros para outra unidade de medida
function converterDistancia() {
    // obtenção de distância informada em metros em formulário
    let d = document.getElementById('distancia').value;

    // validação de distância informada em metros
    if (!d || isNaN(d)) {
        alert('Distância não informada ou informada incorretamente!');
    }
    else {
        let r;      // resultado da conversão
        // array com nomes de unidades de medida disponíveis para conversão
        let descricoes = ['polegada(s)', 'jarda(s)', 'milha(s)', 'légua(s)'];

        // obtenção de unidade de medida selecionada para conversão
        let u = document.getElementById('unidade').value;

        // conversão de distância de acordo com unidade de medida selecionada
        switch(parseInt(u)) {
            case 0: r = (d * 100) / 2.54; break;
            case 1: r = (d * 100) / (2.54 * 36); break;
            case 2: r = (d * 100) / (1760 * 36 * 2.54); break;
            case 3: r = (d * 100) / (3 * 1760 * 36 * 2.54); break;
        }

        // exibição de resultado da conversão através de caixa pop-up de alerta
        alert(`${d} metro(s) corresponde(m) a ${r} ${descricoes[u]}!`);
    }
}

// associação da execução de função com evento de clique em botão
document.getElementById("btn-converter").addEventListener("click", converterDistancia);