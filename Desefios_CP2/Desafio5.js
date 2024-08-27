function encontrarStringsMaisLongas(array) {
    if (array.length === 0) {
      return [];
    }

    let comprimentoMaximo = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > comprimentoMaximo) {
        comprimentoMaximo = array[i].length;
      }
    }
    let stringsMaisLongas = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length === comprimentoMaximo) {
        stringsMaisLongas.push(array[i]);
      }
    }
    return stringsMaisLongas;
  }
  
  console.log(encontrarStringsMaisLongas(["rebeca", "julia", "Ellys", "ronald", "marcio"])); 
  console.log(encontrarStringsMaisLongas(["mar", "céu", "sol"]));
  