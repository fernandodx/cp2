// Verificar se uma palavra é palíndromo, ou seja, ela é escrita da mesma forma de trás para frente e frente para trás.
// Retornando true se for palíndromo, false se não for palíndromo
function isPalindromo(palavra) {
    // Coloca todos os caracteres maiúsuclos e remove todos os espaços
    palavra = palavra.toUpperCase().replace(/\s/g, "");

    // Coloca em um array, alterar ordem para "de trás para frente" e volta a ser uma String com o join
    if(palavra.split("").reverse().join("") === palavra) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindromo("civic"));
