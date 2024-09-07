// Retornar uma nova array contendo apenas as strings mais longas
function stringsMaisLongas(array){
    // Descobrindo tamanho da maior string
    let maiorTamanhoString = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maiorTamanhoString) {
            maiorTamanhoString = array[i].length;
        }
    }

    // Inserindo em nova array as strings de tamanho igual ao maiorTamanhoString
    let novaArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length == maiorTamanhoString){
            novaArray.push(array[i]);
        }
    }

    return novaArray;
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(stringsMaisLongas(inputArray));
