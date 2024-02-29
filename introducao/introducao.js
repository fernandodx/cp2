
function l(valor){
    console.log(valor)
}


//Se precisar comentar algo use //
var ola = "Olá Mundo Js!";

//Aqui eu adiciono um delay de 3 segundos para exibir a msg
setTimeout(() => {
    console.log("String depois de 3 segundo!!!");
}, 3000);

const timeoutLog = () => {
    l("FUI CHAMADO");
}

setTimeout(timeoutLog, 4000);



console.log(ola);

//Tipos de variaveis

var valor = 10;
console.log(typeof valor);

var palavra = "Fernando"
console.log(typeof palavra);

var isOk = true;
console.log(typeof isOk);

var meuObj = {}; //Object
var meuArray = []; //Array
var nulo = null; //Null
var variavelFlamengo; //Undefined


const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

console.log(n1 + n2); //6
console.log(n1 - n2); //-4 
console.log(n1 / n2); //0.2
console.log(n1 * n2); //5

console.log(n1 == n2); // false
console.log(n2 == valorNumericoStr); //true
console.log(n2 === valorNumericoStr); //false

console.log(n2 != valorNumericoStr); //false
console.log(n2 !== valorNumericoStr); //true

console.log(((n2 > n1) || (n2 > n1)) && (1 > 2) ); //false

//Conversão de tipos

const numeroStr = "100";
l(typeof numeroStr); //String

const numeroCerto = Number(numeroStr);
l(typeof numeroCerto); //Number

const idade = 18;

if(idade >= 18) {
    l("Sou adulto");
} else if (idade >= 2) {
    l("Sou criança");
}else{
    l("Sou bebê");
}

const instituicao = "IFB"

switch(instituicao) {
    case "CEUB" : l("ESCOLA"); 
        break;
    case "CIL" : l("Escola de Linguas");
        break;
    case "IFB" : l("FACULDADE");
        break;
    default: l("Não é instituição de ensino");
}
// //1˚: Declaração 
// //2˚: Operação
// //3˚: Incremento
for(let loop = 0; loop < 5; loop++){
    l(`Meu valor no loop: ${loop}`);
}

// //While tem uma condição para parar.
// //Se nunca acontecer a condição vai ficar um loop infinito;
let valorWhile = 0;
while(valorWhile < 5){
    l(`Valor no While: ${valorWhile}`);
    valorWhile++;
}

let valorDoWhile = 0;
// No do While é igual ao while só que ele sempre executa a primeira vez.
do {
    l(`Valor no While: ${valorWhile}`);
    l("Valor no While: " + valorWhile);

} while(valorDoWhile > 1);


const meuMetodo = function exemploMetodo() {
    l("Executei por metodo normal");
}

// const meuArrowFunction = () => l("Executei com arrow function.");

// l(meuArrowFunction);
l(meuMetodo);

const metodoComMetodo = {
    oi() {
        l("OI")
    },
    xau() {
        l("Xau");
    }
};

metodoComMetodo.oi();
metodoComMetodo.xau();





















