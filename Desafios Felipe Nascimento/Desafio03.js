function palindromo(str) {

    const strNormal = str.replace(/\s+/g, '').toLowerCase();

    const strInvertida = strNormal.split('').reverse().join('');

    return strNormal === strInvertida;
}
