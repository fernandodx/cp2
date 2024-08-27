function stringsMaisLongas(array) {
 
    tamanhoMaximo = Math.max(...array.map(str => str.length));

    return array.filter(str => str.length === tamanhoMaximo);
}

array = ["aba", "aa", "ad", "vcd", "aba"];
console.log(stringsMaisLongas(array))