// solicitação de entrada de distância em metros
let m = prompt(`Digite distância em metros:`);

// se usuário confirmar entrada de texto...
if (m != null) {
    if (isNaN(m)) {         // se texto fornecido não for um número...
        alert(`Distância informada incorretamente!`)
    }
    else {                  // caso contrário...
        // cálculo de distâncias equivalentes considerando distãncia fornecida pelo usuário
		let dm = m * 10;    // distância equivalente em decímetros
		let cm = m * 100;   // distância equivalente em centímetros
		let mm = m * 1000;  // distância equivalente em milímetros
        
        // exibição de caixa de diálogo de alerta com as distâncias equivalentes
        alert(`Distância corresponde em decímetros: ${dm}\n` + 
              `Distância corresponde em centímetros: ${cm}\n` + 
              `Distância corresponde em milímetros: ${mm}`);
    }
}