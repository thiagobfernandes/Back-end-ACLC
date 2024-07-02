
function somaValores(valor1, valor2) { // assinatura da função
    return (valor1 + valor2)/2 * 10;
}

function somaValores2(abobrinha, valor2) { // assinatura da função
    return (abobrinha + valor2)/2 * 10;
}

let num1 = 1;
let num2 = 12;

// const soma = num1 + num2;
const soma = somaValores(num1, num2);

let num3 = 3;
let num4 = 32;

// const soma2 = num3 + num4;
const soma2 = somaValores(num3, num4);

// const total = soma + soma2;
const total = somaValores(soma, soma2);

console.log(total);