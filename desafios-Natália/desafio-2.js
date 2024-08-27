function calcularSeculo(ano) {
    let seculo = Math.floor(ano / 100);

    if (ano % 100 !== 0) {
        seculo++;
    }
    return seculo;
}

let ano = 2023;
let seculo = calcularSeculo(ano);
console.log("O ano", ano, "pertence ao século", seculo);