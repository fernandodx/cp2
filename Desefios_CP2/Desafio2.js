function calcularSeculo(ano) {
    let seculo = (ano / 100) | 0;
  
    if (ano % 100 !== 0) {
      century += 1;
    }
  
    return seculo;
  }
  
  console.log(calcularSeculo(1905)); 
  console.log(calcularSeculo(1700));