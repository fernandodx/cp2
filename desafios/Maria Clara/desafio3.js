function palavraPalindromo(palavra) {
  palavra = palavra.toLowerCase();

  for (var i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palavraPalindromo("ovo"));
console.log(palavraPalindromo("civic"));
console.log(palavraPalindromo("ana"));
console.log(palavraPalindromo("arara"));
console.log(palavraPalindromo("maria"));
