function maiorProdutoAdjacente(inputArray) {
    let maxProduto = inputArray[0] * inputArray[1]; 

    
    for (let i = 1; i < inputArray.length - 1; i++) {
        let produtoAtual = inputArray[i] * inputArray[i + 1];
        if (produtoAtual > maxProduto) {
            maxProduto = produtoAtual;
        }
    }

    return maxProduto;
}

let inputArray = [3, 6, -2, -5, 7, 3];
console.log(maiorProdutoAdjacente(inputArray));