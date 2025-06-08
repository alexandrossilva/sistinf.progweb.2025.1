// acréscimo de um elemento ao corpo do documento
function acrescentarElemento() {
    // obtenção de referência de elemento div
    const div = document.getElementById("meuDiv");

    const h3 = document.createElement("h3");        // criação de novo cabeçalho (elemento h3)
    div.append(h3);                                 // acréscimo do cabeçalho ao div
    h3.append("Hello!");                            // acréscimo de texto ao cabeçalho adicionado (será seu conteúdo)

    const i = document.createElement("i");          // criação de novo elemento de texto destacado (elemento i)
    h3.append(i);                                   // acréscimo do elemento de texto destacado ao cabeçalho
    i.append("Eu sou um elemento i acrescentado");  // acréscimo de texto ao elemento de texto destacado (será seu conteúdo)
}