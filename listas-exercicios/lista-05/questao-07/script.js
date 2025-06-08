const min       = 1;            // maior número aleatório possível
const max       = 1000;         // maior número aleatório possível
let palpitesIncorretos = [];    // array de palpites incorretos

// geração de número pseudo-aleatório
const n         = Math.floor(Math.random() * (max - min) + min);

function verificarPalpite() {
    // obtenção de palpite digitado
    let palpite = document.getElementById("palpite").value.trim();

    // validação de palpite digitado
    if (palpite == "" || isNaN(palpite) || palpite.indexOf(".")!=-1)
        alert("Palpite não informado ou inválido");
    else {  // em caso de validação de palpite digitado...
        palpite = parseInt(palpite);
        if (palpite != n) {     // se palpite incorreto...
            // exibição de janela popup de alerta de palpite incorreto
            alert("Palpite incorreto. Número sorteado é outro!");

            // inclusão de palpite incorreto em array
            palpitesIncorretos.push(palpite);

            // obtenção de parágrafo no qual são visualizados palpites incorretos
            let pPalpites = document.getElementById("pPalpites");

            // atualização de conteúdo de parágrafo com palpite incorreto, com indicação,
            // inclusive, do mesmo ser inferior ou superior ao número gerado aleatoriamente
            pPalpites.innerHTML += palpite + " é um palpite incorreto ";

            if (parseInt(palpite) < n) {
                pPalpites.innerHTML += "(inferior ao número sorteado)";
            }
            else {
                pPalpites.innerHTML += "(superior ao número sorteado)";
            }

            // atualização de conteúdo de parágrafo com inclusão de quebra de linha
            pPalpites.innerHTML += "<br>";
        }
        else {                  // se acerto de palpite...
            palpitesIncorretos.sort();  // ordenação de palpites armazenados em array
            alert("Seu palpite está correto! Palpites anteriores a este: " + palpitesIncorretos);
        }
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", verificarPalpite);