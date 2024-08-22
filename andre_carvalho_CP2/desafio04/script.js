var entrada = document.getElementById('ent')
var botãoAd = document.getElementById('btElem')
var botãoL = document.getElementById('btLimpar')
var vEntrada = document.getElementById('vetEntrada')
var vetor = []
var resultado = document.getElementById('divSaida')
var respostas = []
var indices = []

function adicionar(){
    let elementosTxt = entrada.value.split(' ')
    for(let i = 0; i < elementosTxt.length; i++){
        vetor[i] = Number(elementosTxt[i])
    }
    vEntrada.innerHTML = `[${vetor}]`
    entrada.value = null
}

function limpar(){
    vetor = []
    respostas = []
    indices = []
    vEntrada.innerHTML = `<p>O vetor de entrada aparece aqui.</p>`
    resultado.innerHTML = ''
}

function calcular(){
    let produtos = []
    for(let i = 0; i < (vetor.length - 1); i++){
    produtos[i] = vetor[i] * vetor[i + 1]
    }
    let max = Math.max(...produtos)
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i] == max){
            indices.push(i)
        }
    }

    for(let i = 0; i < indices.length; i++){
        let resposta = []
        resposta.push(vetor[indices[i]])
        resposta.push(vetor[indices[i]+1])
        respostas.push(resposta)
    }
    resultado.innerHTML = `O vetor de entrada é: [${vetor}];<br>`
    resultado.innerHTML += `O par ou os pares adjacentes que produzem o maior produto são:`
    for(let i = 0; i < respostas.length; i++){
        resultado.innerHTML += `<br><p>Par ${i+1}: {${respostas[i]}} nas posições: ${indices[i]} e ${indices[i] +1} do vetor de entrada;</p>`
    }
    vetor = []
    respostas = []
    indices = []
    vEntrada.innerHTML = `<p>O vetor de entrada aparece aqui.</p>`
}










/*var vetor = [1,1,1,1,1,3,4,4,5,100,1,1,50,10]
var produtos = []
var indices = []
var respostas = []
for(let i = 0; i < (vetor.length - 1); i++){
    produtos[i] = vetor[i] * vetor[i + 1]
}
console.log(produtos)
var max = Math.max(...produtos)
console.log(max)
for(let i = 0; i < produtos.length; i++){
    if(produtos[i] == max){
        indices.push(i)
    }
}
console.log(indices)
console.log(vetor[indices[0]])

for(let i = 0; i < indices.length; i++){
    let resposta = []
    resposta.push(vetor[indices[i]])
    resposta.push(vetor[indices[i]+1])
    respostas.push(resposta)
}
console.log(respostas)*/
