// cálculo e exibição de peso ideal 
// seguindo-se a isso inclusão de informações em corpo da página
function calcularPesoIdeal() {
    // obtenção de sexo e altura informados
    let sexo = document.getElementById("sexo").value;
    let alt  = document.getElementById("altura").value.trim();

    if (sexo == -1)                     // validação de entrada de sexo
        alert("Sexo não selecionado");
    else if (alt == "" || isNaN(alt))   // validação de entrada de altura
        alert("Altura não informada ou inválida!");
    else {
        // cálculo de peso ideal com base em sexo e altura
        let peso = sexo == 0 ? 72.7 * parseFloat(alt) - 58 : 62.1 * parseFloat(alt) - 44.7;

        // alerta de peso ideal
        alert(`Peso Ideal: ${peso.toFixed(2)} Kg`);

        // criação de nova linha de tabela
        let linha = document.createElement("tr");

        // criação de nova célula de tabela com informativo de sexo e inclusão em linha
        let celula = document.createElement("td");
        celula.appendChild(document.createTextNode(sexo == 0 ? "Masculino" : "Feminino"));
        linha.appendChild(celula);

        // criação de nova célula de tabela com informativo de altura e inclusão em linha
        celula = document.createElement("td");
        celula.appendChild(document.createTextNode(parseFloat(alt).toFixed(2)));
        linha.appendChild(celula);

        // criação de nova célula de tabela com informativo de peso ideal e inclusão em linha
        celula = document.createElement("td");
        celula.appendChild(document.createTextNode(peso.toFixed(2)));
        linha.appendChild(celula);

        // inclusão de nova linha em tabela
        document.getElementById("tabHistorico").appendChild(linha);

        // atualização de propriedade de visualização de conteiner de tabela
        document.getElementById("tabHistorico").parentNode.style.display = "flex";
    }
}

// obtenção de botão da página
let botao = document.querySelector("button");

// associação de execução de função com evento de clique no botão
botao.addEventListener("click", calcularPesoIdeal);