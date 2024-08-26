const readline = require('readline-sync');

function seculo(ano){
    return Math.ceil(ano / 100);
}
const ano = readline.questionInt("Digite um ano: ");
if (ano) {
  console.log(`O século do ano ${ano} é: ${seculo(ano)}`);
} else {
  console.log("Insira um ano válido.");
}