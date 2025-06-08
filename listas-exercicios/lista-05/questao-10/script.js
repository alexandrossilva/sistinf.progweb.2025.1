// atualização de data e horário corrente (além de tempo restante para o término do dia corrente)
function atualizarDiaHorario() {
    let dt = new Date();    // obtenção de nova instância de Date 

    // extração de partes de data e horário de instância
    let dia = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
    let mes = dt.getMonth() < 9 ? `0${(dt.getMonth() + 1)}` : (dt.getMonth() + 1);
    let ano = dt.getFullYear();
    let hor = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let min = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
    let seg = dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : dt.getSeconds();

    // cálculo de quantidade de segundos decorridos desde o início do dia
    let tempo = (hor * 60 * 60) + (min * 60) + seg;

    // cálculo de quantidade de segundos restantes para o término do dia
    let tempoRestante = (24 * 60 * 60) - tempo;                     // segundos restantes (total)
    let horRestante = Math.floor(tempoRestante / (60 * 60));        // horas restantes
    let minRestante = Math.floor(tempoRestante % (60 * 60) / 60);   // minutos restantes
    let segRestante = tempoRestante % 60;                           // segundos restantes

    // formatação de tempo restante em horas, minutos e segundos
    horRestante = horRestante < 10 ? `0${horRestante}` : horRestante;
    minRestante = minRestante < 10 ? `0${minRestante}` : minRestante;
    segRestante = segRestante < 10 ? `0${segRestante}` : segRestante;

    // atualização de conteúdos de elementos fraseados
    document.getElementById("spanDiaHorario").innerHTML = `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`;
    document.getElementById("spanTempoRestante").innerHTML = `${horRestante}:${minRestante}:${segRestante}`;
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", atualizarDiaHorario);

// atualização de data e horário ao final de carregamento da página
window.addEventListener("load", atualizarDiaHorario);