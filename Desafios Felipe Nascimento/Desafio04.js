function maiorAdjacente(array) {

    let maiorProduto = -Infinity;

    for (let i = 0; i < array.length - 1; i++) {

        const produto = array[i] * array[i + 1];

        if (produto > maiorProduto) {
            maiorProduto = produto;
        }
    }

    return maiorProduto;
}
