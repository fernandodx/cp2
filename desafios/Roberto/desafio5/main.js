var palavras = ["la", "a", "ps", "e", "z"];
var longas = [];
var tamanho = 0;

for (let i of palavras) {
    let cont = i.length;
    if (cont > tamanho) {
        tamanho = cont;
    }
}

for (let i of palavras) {
    if (i.length === tamanho)
        longas.push(i);
}

console.log(longas)
