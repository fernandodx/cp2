function produtoAdjacente(arr) {
    if (arr.length < 2) {
        throw new Error("O array deve ter pelo menos dois elementos");
    }
    let maiorProduto = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        let produtoAtual = arr[i] * arr[i + 1];
        if (produtoAtual > maiorProduto) {
            maiorProduto = produtoAtual;
        }
    }

    return maiorProduto;
}

const inputArray = [5, 8, -9, 6, 7, 4];
console.log(produtoAdjacente(inputArray));