function maiorProdutoAdjacente(arr) {
    let maxProduto = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
        maxProduto = Math.max(maxProduto, arr[i] * arr[i + 1]);
    }

    return maxProduto;
}