function vefPali(palavra) {
    let divide = palavra.split("");
    var forma = [];
    for (let i = divide.length -1 ; i >= 0; i--) {
        forma.push(divide[i]);
    }
    let junta = forma.join("");
    if (palavra === junta) {
        console.log(`${palavra} e um palindromo`);
    }else{
        console.log(`${palavra} nao e um palindromo`)
    }
}
vefPali("arara");

