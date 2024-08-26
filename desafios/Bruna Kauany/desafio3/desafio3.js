const readline = require('readline-sync');

function Palindromo(palavra) {
    palavra = palavra.replace(/\s/g, '').toLowerCase();
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

const palavraUsuario = readline.question('Digite uma palavra: ');

const resultado = Palindromo(palavraUsuario);

console.log("Resultado = " + `${resultado}`);
