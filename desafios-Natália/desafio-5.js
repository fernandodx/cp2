function encontrarStringsMaisLongas(array) {
    const maxTamanho = Math.max(...array.map(str => str.length));

    return array.filter(str => str.length === maxTamanho);
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
const resultado = encontrarStringsMaisLongas(inputArray);
console.log(resultado);