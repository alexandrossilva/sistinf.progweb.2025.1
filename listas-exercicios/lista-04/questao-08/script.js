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

        // obtenção de unidade de medida selecionada para conversão
        let u = document.getElementById('unidade').value;

        // conversão de distância de acordo com unidade de medida selecionada
        switch(parseInt(u)) {
            case 0: r = (d * 100) / 2.54; break;
            case 1: r = (d * 100) / (2.54 * 36); break;
            case 2: r = (d * 100) / (1760 * 36 * 2.54); break;
            case 3: r = (d * 100) / (3 * 1760 * 36 * 2.54); break;
        }

        // atualizaçaõ de conteúdo de campo de texto com resultado da conversão (com duas casas decimais)
        document.getElementById("distancia-convertida").value = r.toFixed(2);
    }
}

// associação da execução de função com evento de clique em botão
document.getElementById("btn-converter").addEventListener("click", converterDistancia);