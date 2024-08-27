function encontrarMaiorProduto(array) {
    if (array.length < 2) {
      return "O array deve ter pelo menos dois elementos para saber o produto.";
    }
    let maiorProduto = array[0] * array[1];
  
    for (let i = 1; i < array.length - 1; i++) {
      let produtoAtual = array[i] * array[i + 1];
      if (produtoAtual > maiorProduto) {
        maiorProduto = produtoAtual;
      }
    }
  
    return maiorProduto;
  }
  console.log(encontrarMaiorProduto([3, 6, 7, 3])); 
  console.log(encontrarMaiorProduto([-1, -2, -3, -4])); 