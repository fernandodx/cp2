function checkPalindromo(str) {

    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    

    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


const input = prompt("Digite uma palavra para verificar se é um palíndromo:");
const resultado = checkPalindromo(input);


if (resultado) {
    console.log(`${input} é um palíndromo.`);
} else {
    console.log(`${input} não é um palíndromo.`);
}
