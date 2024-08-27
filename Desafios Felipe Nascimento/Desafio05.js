function stringsMaior(array) {

    const comprimentoMax = Math.max(...array.map(str => str.length));
    
    return array.filter(str => str.length === comprimentoMax);
}
