// atualização de textos em maiúsculo e minúsculo
function converterTexto() {
    // obtenção de nome digitado em campo de texto
    let texto = document.getElementById("texto").value;

    // atualização de campos de texto em maiúsculo e minúsculo
    document.getElementById("textoMai").value = texto.toUpperCase();
    document.getElementById("textoMin").value = texto.toLowerCase();
}

// associação de execução de funções com eventos em campo de texto
document.getElementById("texto").addEventListener("keydown", converterTexto);
document.getElementById("texto").addEventListener("keypress", converterTexto);
document.getElementById("texto").addEventListener("keyup", converterTexto);