// Retornar maior produto para par de elementos adjascentes, ou seja, que esão lado a lado.
function maiorProdutoArray(array){
    // Definir como -Infinity para evitar falha por definir algum outro como 0;
    let maiorProduto = -Infinity;

    for(let i = 0; i < array.length; i++){
        let produto = array[i] * array[i + 1];
        if (produto > maiorProduto) {
            maiorProduto = produto;
        }
    }

    return maiorProduto;
}

const array = [3, 6, -2, -5, 7, 3];
console.log(maiorProdutoArray(array));
