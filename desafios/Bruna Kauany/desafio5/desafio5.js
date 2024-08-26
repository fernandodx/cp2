const readline = require('readline-sync');

function StringsLongas(array) {
  const comprimentoMaximo = Math.max(...array.map(str => str.length));

  return array.filter(str => str.length === comprimentoMaximo);
}

const entrada = readline.question('Digite as strings, separadas por espaco: ');

const arrayStrings = entrada.split(' ');

const resultado = StringsLongas(arrayStrings);
console.log('As strings mais longas são:', resultado);