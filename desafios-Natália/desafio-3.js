function ehPalindromo(palavra) {

    let palavraInvertida = palavra.split('').reverse().join('');

    return palavra === palavraInvertida;
}

console.log(ehPalindromo("asa"));
console.log(ehPalindromo("celular"));
