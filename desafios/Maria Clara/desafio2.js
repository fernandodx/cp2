function defineSeculo(ano) {
  let seculo = Math.ceil(ano/100);

  return seculo;
}

console.log(defineSeculo(1780));
console.log(defineSeculo(2024));
console.log(defineSeculo(1620));
console.log(defineSeculo(1930));
