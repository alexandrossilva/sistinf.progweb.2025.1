function divisorMedio() {
    let n = document.getElementById("n").value;     // entrada, pelo usuário, de texto

    if (n != null) {                                // se entrada confirmada pelo usuário...
        if (isNaN(n) || n <= 0) {                   // se entrada não representar número válido...
            alert("Não é um número válido!");       // exibição de mensagem de alerta
        }                                           // caso contrário...
        else {
            let divisores = [];                     // array de divisores inicialmente vazio...
            let somaDivisores = 0;                  // totalização de divisiores inicializada com 0 (zero)
    
            // identificação de divisores de inteiro informado por usuário usando-se contador
            for (let i = 1; i < n; i++) {
                // em caso de obtenção de 0 (zero) ao calcular resto da divisão de inteiro por enésimo valor de contador...
                if (n % i == 0) {
                    divisores.push(i);              // inserção de enésimo valor de contador em array
                    somaDivisores += i;             // atualização de soma de divisores
                }
            }
    
            // obtenção de média de divisores
            let mediaDivisores = somaDivisores / divisores.length;
    
            let divisorMedio = null;                // divisor médio inicializado com null (nulo)
    
            // obtenção de divisor médio a partir de comparação dos divisores
            for (let i = 0; i < divisores.length; i++) {
                let divisor = divisores[i];         // enésimo divisor
    
                // se enésimo divisor corresponder à média de divisores...
                if (divisor == mediaDivisores) {
                    divisorMedio = divisor;         // atualização de divisor médio
                    break;                          // encerramento de busca de divisor médio
                }
                // caso contrário, se enésimo divisor for superior à média de divisores...
                else if (divisor > mediaDivisores) {
                    // obtenção de divisor imediatamente anterior
                    let divisorAnterior = divisores[i - 1];

                    // diferença absoluta entre média de divisosores e enésimo anterior
                    let dif1 = Math.abs(mediaDivisores - divisor);
                    
                    // diferença absoluta entre média de divisosores e divisor imediatamente anterior
                    let dif2 = Math.abs(mediaDivisores - divisorAnterior);
    
                    // identificação de menor diferença e, por consequência, de dividor médio
                    if (dif1 < dif2)
                        divisorMedio = divisor;
                    else
                        divisorMedio = divisorAnterior;
    
                    // encerramento de busca de divisor médio
                    break;
                }
            }
    
            // exibição de mensagem com sequência de divisores, sua média e divisor médio
            alert(`Divisores de ${n}: ${divisores}\n` +
                  `Média de Divisores: ${mediaDivisores}\n` +
                  `Divisor Médio: ${divisorMedio}`);
        }   
    }
}