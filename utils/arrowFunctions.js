
// função de frechinha => função anônima
const frutas = ['morango', 'banana', 'goiaba', 'laranja', 'uva'];

// function filtro(fruta) {
//     return fruta.length < 5;
// }

// let filtrado = frutas.filter(fruta => filtro(fruta));

let filtrado = frutas.filter(fruta => fruta.length < 5)
console.log(filtrado);

const func = function() {
    console.log('Olá, mundo!');
}