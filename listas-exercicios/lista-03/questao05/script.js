// solicitação de entrada de um texto
let n = prompt(`Digite um númeron inteiro:`);

// se usuário confirmar entrada de texto...
if (n != null) {
    if (isNaN(n)) {         // se texto fornecido não for um número...
        alert(`Número informado incorretamente!`)
    }
    else {                  // caso contrário...
	    let r = n % 2;      // módulo do número digitado por 2 (resto da divisão inteira)

	    if (r == 0) {       // se módulo for 0 (zero)...
	    	alert(`${n} é um número par!`);
	    }
	    else {              // caso contrário (módulo diferente de 0)...
	    	alert(`${n} é um número ímpar!`);
	    }
    }
}