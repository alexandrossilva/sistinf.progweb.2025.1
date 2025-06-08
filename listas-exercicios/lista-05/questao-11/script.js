// exibição de mensagem de cunmprimento e horário corrente no corpo da página
function exigirMensagemHorario() {
    let dt = new Date();    // data e horário corrente

    // extração de horas e minutos de data e horário
    let hor = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let min = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();

    // atualização de conteúdos de elementos fraseados de mensagem de cumprimento e horário
    document.getElementById("spanMensagem").innerHTML = hor < 12 ? "Bom Dia" : hor < 18 ? "Boa Tarde" : "Boa Noite";
    document.getElementById("spanHorario").innerHTML = `${hor}:${min}`;
}

// exibição de mensagem de cunmprimento e horário ao final de carregamento da página
window.addEventListener("load", exigirMensagemHorario);