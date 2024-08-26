const readline = require('readline-sync');

function maiorProdutoAdjacente(array) {
  let maiorProduto = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    const produtoAtual = array[i] * array[i + 1];
    maiorProduto = Math.max(maiorProduto, produtoAtual);
  }

  return maiorProduto;
}

const entrada = readline.question('Digite os numeros do array, separados por espaco: ');

const arrayNumeros = entrada.split(' ').map(Number);

const resultado = maiorProdutoAdjacente(arrayNumeros);
console.log(`O maior produto de elementos adjacentes é: ${resultado}`);