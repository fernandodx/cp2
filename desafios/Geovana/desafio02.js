function seculoDoAno(ano) {
    let seculo = parseInt(ano / 100);
    
    if (ano % 100 !== 0) {
        seculo += 1;
    }
    
    return seculo;
}

console.log(seculoDoAno(2001));
console.log(seculoDoAno(1700)); 