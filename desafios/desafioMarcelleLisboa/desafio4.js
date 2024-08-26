function maiorProduto(array) {
 
    let resultado = array[0] * array[1];

    for (let i = 1; i < array.length - 1; i++) {
        produtoAtual = array[i] * array[i + 1];
        if (produtoAtual > resultado) {
            resultado = produtoAtual;
        }
    }

    return resultado;
    
}

array = [3, 6, -2, -5, 7, 3];
console.log(maiorProduto(array))