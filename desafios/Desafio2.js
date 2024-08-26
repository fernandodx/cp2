function calcularSeculo(ano) {
    return Math.ceil(ano / 100);
}


const ano1 = 1996;
const seculo1 = calcularSeculo(ano1);
console.log(`Ano: ${ano1}, Século: ${seculo1}`);  

const ano2 = 2024;
const seculo2 = calcularSeculo(ano2);
console.log(`Ano: ${ano2}, Século: ${seculo2}`); 

