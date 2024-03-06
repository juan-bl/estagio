const entrada = 144;
let soma = 0, numeroAnterior = 0, numeroSeguinte = 1;

while (true) {
    if (typeof(entrada) !== 'number') {
        console.log('Por favor, coloque um número válido!');
        break;
    };

    if (soma === entrada) {
        console.log(`O número ${entrada} PERTENCE a sequência.`);
        break;
    } else if (soma > entrada) {
        console.log(`O número ${entrada} NÃO PERTENCE a sequência.`);
        break;
    };

    soma = numeroAnterior + numeroSeguinte;
    numeroAnterior = numeroSeguinte;
    numeroSeguinte = soma;
};