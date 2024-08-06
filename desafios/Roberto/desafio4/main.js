var int = [3, 6, -2, -5, 7, 3];
var maior = 0;

for (let i = 0; i < int.length -1; i++) {
       let res = int[i] * int[i + 1];
        if (res > maior) {
            maior = res;
        }
}
console.log(`Maior produto adjacente e ${maior}`);