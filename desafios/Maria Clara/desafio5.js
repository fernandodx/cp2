/**
 * 
 * @Author Maria Clara Barroso
 * @date 02/04/2024
 * @description Resolução do desafio 5 sobre retornar um novo array com as maiores strings
 *  
 */

function retornaStringMaior(array) {
  let comprimentoMax = 0;
  let stringLonga = [];

  for(let i = 0; i < array.length; i++) {

    let comprimentoAtual = array[i].length;

    if(comprimentoAtual > comprimentoMax) { // jogo de posições, estrutura de dados bubble sort
      stringLonga = [array[i]];
      comprimentoMax = comprimentoAtual;
    } else if (comprimentoAtual === comprimentoMax) {
      stringLonga.push(array[i]);
    }
  }

  return stringLonga;
}

console.log(retornaStringMaior(['aaaq', 'asjbfjasn', 'g', 'o']));
console.log(retornaStringMaior(["aba", "aa", "ad", "vcd", "aba"]));
console.log(retornaStringMaior(['aq', 'asjn', 'gasf', 'oolr']));
console.log(retornaStringMaior(['bbb', 'hn', 'i', 'od']));