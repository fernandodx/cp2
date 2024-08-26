const readline = require('readline-sync');

function soma(n1, n2) {
    return n1 + n2;
}
const numero1 = readline.questionFloat("Digite um valor: ");
const numero2 = readline.questionFloat("Digite o segundo valor: ");

const resultado = soma(numero1, numero2);
console.log("resultado: " + resultado); 