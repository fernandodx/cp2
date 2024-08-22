var entrada = document.querySelector('#entrada')
var botAdic = document.querySelector('#btAdic')
var botLimp = document.querySelector('#btLimp')
var botVer = document.querySelector('#btVer')
var divEnt = document.querySelector('#divEnt')
var entDisplay = document.querySelector('#entDisp')
var vetor = []
var respostas = []
var resultado = document.querySelector('#res')
botAdic.addEventListener('click', adicionar)
botLimp.addEventListener('click', limpar)
botVer.addEventListener('click', verificar)

function adicionar(){
    vetor = entrada.value.split(" ")
    entDisplay.innerHTML = `<p>O vetor de entrada com as strings é: [${vetor}]</p>`
    entrada.value = ''
}

function limpar(){
   entrada.value = ''
   vetor = []
   entDisplay.innerHTML = `<p>O vetor de strings adicionado aparece aqui.</p>`
   resultado.innerHTML = `<p>O resultado aparece aqui.</p>`
}

function verificar(){
    let maior = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].length > maior){
            maior = vetor[i].length      
        }
    }
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].length == maior){
            respostas.push(vetor[i])
        }
    }
    resultado.innerHTML = `<p>Tamanho da maior string: ${maior}</p><p>Strings mais longas: [${respostas}]</p>`
    respostas = []
}


