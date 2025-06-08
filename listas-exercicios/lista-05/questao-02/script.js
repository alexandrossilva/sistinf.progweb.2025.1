// acréscimo de dígito em campo de senha
function adicionarDigito() {
    // obtenção de dígito a partir de rótulo de botão
    let digito = this.innerHTML;

    // atualização de conteúdo de campo de senha
    document.getElementById("senha").value += digito;
}

// exibição de dígitos por extenso de senha
function mostrarSenha() {
    // obtenção de senha até então inserida em campo
    let senha = document.getElementById("senha").value;

    if (senha.length == 0)  // se não houver dígitos em senha...
        alert("Senha ainda não informada!");
    else {
        let i;
        let senhaExtenso = "";  // senha por extenso

        // iteração entre caracteres numéricos de senha
        for (i = 0; i < senha.length; i++) {
            // atualização de senha por extenso com nome de enésimo dígito
            switch(parseInt(senha.charAt(i))) {
                case 0: senhaExtenso += "ZERO";   break;
                case 1: senhaExtenso += "UM";     break;
                case 2: senhaExtenso += "DOIS";   break;
                case 3: senhaExtenso += "TRÊS";   break;
                case 4: senhaExtenso += "QUATRO"; break;
                case 5: senhaExtenso += "CINCO";  break;
                case 6: senhaExtenso += "SEIS";   break;
                case 7: senhaExtenso += "SETE";   break;
                case 8: senhaExtenso += "NOVE";   break;
                case 9: senhaExtenso += "OITO";   break;
            }

            // atualização de senha por extenso com inclusão de símbolo de vírgula (se for o caso)
            if (i < senha.length - 1) {
                senhaExtenso += ", ";
            }
        }

        // exibição de janela popup de alerta com senha por extensão
        alert("Senha por extenso: " + senhaExtenso);
    }
}

// remoção de senha até então inserida
function apagarSenha() {
    // atualização de conteúdo de campo de senha com string vazia
    document.getElementById("senha").value = "";            
}

// obtenção de todos os botões
let botoes = document.querySelectorAll("button");

// associação de execução de funções com cliques em botões (com base em seus respectivos rótulos)
for (let i = 0; i < botoes.length; i++) {
    let botao = botoes[i];          // enésimo botão
    let rotulo = botao.innerHTML;   // rótulo de enésimo botão

    if (!isNaN(rotulo)) {                       // se botão for de dígito para adicionar...
        botao.addEventListener("click", adicionarDigito);
    }
    else if (rotulo.startsWith("Mostrar")) {    // se botão for de mostrar senha...
        botao.addEventListener("click", mostrarSenha);
    }
    else {                                      // se botão for de apagar senha...
        botao.addEventListener("click", apagarSenha);
    }
}