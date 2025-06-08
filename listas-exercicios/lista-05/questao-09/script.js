// atualização de data e horário corrente
function atualizarDiaHorario() {
    let dt = new Date();    // obtenção de nova instância de Date 

    // extração de partes de data e horário de instância
    let dia = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
    let mes = dt.getMonth() < 9 ? `0${(dt.getMonth() + 1)}` : (dt.getMonth() + 1);
    let ano = dt.getFullYear();
    let hor = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let min = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
    let seg = dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : dt.getSeconds();

    // atualização de conteúdo de elemento fraseado
    document.getElementById("spanDiaHorario").innerHTML = `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`;
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", atualizarDiaHorario);

// atualização de data e horário ao final de carregamento da página
window.addEventListener("load", atualizarDiaHorario);