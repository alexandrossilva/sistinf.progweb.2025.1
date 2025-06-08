let nomes   = [];   // array de nomes de indivíduos
let grausOb = [];   // array de graus de obesidade de indivíduos
// array de descrições de graus de obesidades
let descGrauOb = ["Magreza", "Saudável", "Sobrepeso", "Obesidade Leve", "Obesidade Severa", "Obesidade Mórbida"]

// processamento de grau de obesidade de indíviduo
function processarDados() {
    // obtenção de dados digitados de nome, peso e altura de indivíduo
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value.trim().replace(",", ".");
    let altura = document.getElementById("altura").value.trim().replace(",", ".");

    // se nome de indivíduo não informado...
    if (nome == "") {
        alert("Nome não informado!");
    }
    // se peso de indivíduo não informado...
    else if (peso == "" || isNaN(peso)) {
        alert("Peso não informado ou inválido!");
    }
    // se altura de indivíduo não informado...
    else if (altura == "" || isNaN(altura)) {
        alert("Altura não informada ou inválida!");
    }
    else {
        let grauOb;
        let imc = peso / (altura * altura); // cálculo de IMC

        // identificação de grau de obesidade de acordo com descrições armazenadas em array
        if (imc < 18.5)     { grauOb = 0; }
        else if (imc < 25)  { grauOb = 1; }
        else if (imc < 30)  { grauOb = 2; }
        else if (imc < 35)  { grauOb = 3; }
        else if (imc < 40)  { grauOb = 4; }
        else                { grauOb = 5; }

        // inclusão de nome e grau de obesidade de indivíduo em respectivos arrays
        nomes.push(nome);
        grausOb.push(grauOb);

        // exibição de janela popup de alerta de grau de obesidade de indivíduo
        alert("Grau de Obesidade de " + nome + ": " + descGrauOb[grauOb]);

        // atualização de conteúdos de campos de nome, peso e altura de indivíduo
        document.getElementById("nome").value = "";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";

        // requisição de foco em campo de entrada de nome de indivíduo
        document.getElementById("nome").focus();
    }
}

// identificação de indivíduos com determinado grau de obesidade
function listarIndividuos() {
    // obtenção de grau de obesidade selecionado
    let grauOb = document.getElementById("grauObesidade").value;

    if (grauOb == -1) { // validação de grau de obesidade
        alert("Nenhum grau de obesidade selecionado!");
    }
    else {
        let nomesGrauOb = "";       // string com nomes de indivíduos
        grauOb = parseInt(grauOb);

        // iteração entre graus de obesidades calculados anteriormente
        for (let i = 0; i < grausOb.length; i++) {
            // se enésimo grau de obesidade calculado for idêntico àquele selecionado...
            if (grausOb[i] == grauOb) {
                // atualização de string de nomes de indivíduos
                nomesGrauOb += (nomesGrauOb != "" ? ", " : "") + nomes[i].toUpperCase();
            }
        }

        // atualização de conteúdo de parágrafo de acordo com relação de indivíduos com grau de obesidade selecionado
        if (nomesGrauOb == "") {
            document.getElementById("pNomes").innerHTML = "Não há indivíduos nesta condição!";
        }
        else {
            document.getElementById("pNomes").innerHTML = `Indivíduos nesta condição: ${nomesGrauOb}`;
        }
    }
}

// associação de execução de funções com eventos de cliques em botões
document.getElementById("btn-processar").addEventListener("click", processarDados);
document.getElementById("btn-listar").addEventListener("click", listarIndividuos);