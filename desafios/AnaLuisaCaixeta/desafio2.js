// Retornar o século que se encontra determinado ano
// Math.ceil(2.2) = 3 -> retorna o maior número inteiro maior ou igual a um determinado número
function seculo(ano){
    return Math.ceil(ano / 100);
}

console.log(seculo(2024));
