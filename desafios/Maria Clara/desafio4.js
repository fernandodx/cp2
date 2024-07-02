/**
 * 
 * @Author Maria Clara Barroso
 * @date 02/04/2024
 * @description Resolução do desafio 4 sobre produto de números em posições adjacentes
 *  
 */

function maiorProdutoAdjacente(inputArray) {
  if (inputArray.length < 2) {
      return null;
  }

  let maiorProduto = inputArray[0] * inputArray[1];

  
  for (let i = 1; i < inputArray.length - 1; i++) {
      
      let produtoAtual = inputArray[i] * inputArray[i + 1];
      
      if (produtoAtual > maiorProduto) {
          maiorProduto = produtoAtual;
      }
  }

  return maiorProduto;
}

console.log(maiorProdutoAdjacente([3, 6, -2, -5, 7, 3]));
console.log(maiorProdutoAdjacente([2, 7, 8, 6]));
console.log(maiorProdutoAdjacente([3, -5, 7, 9]));
