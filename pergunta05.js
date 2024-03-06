function inverterString(entrada) {
    if (typeof(entrada) !== 'string') {
        return console.log('Por favor, escreva uma string válida');
    };

    const arrayEntrada = entrada.split('');
    const arrayInvertido = [];

    for (let index = arrayEntrada.length - 1; index !== -1; index--) {
        arrayInvertido.push(arrayEntrada[index]);
    };

    return console.log(arrayInvertido.join(''));
};

inverterString('testando');