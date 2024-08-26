function checkPalindromo(texto) {
    stringUnica = texto.replace(/\s+/g, '').toLowerCase();
    stringReversa = stringUnica.split('').reverse().join('');
    if (stringUnica === stringReversa) {
        Resultado = true;
    }
    else {
        Resultado = false;
    }
    return Resultado
}

console.log(checkPalindromo("CIVIC"))