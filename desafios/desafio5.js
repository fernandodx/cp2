function stringsMaisLongas(arr) {
    if (arr.length === 0) return [];

  
    let comprimentoMaximo = Math.max(...arr.map(str => str.length));

    
    return arr.filter(str => str.length === comprimentoMaximo);
}


const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
const resultado = stringsMaisLongas(inputArray);
console.log("Strings mais longas são:", resultado);
