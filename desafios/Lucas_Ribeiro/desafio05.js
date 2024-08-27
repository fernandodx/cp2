function stringsMaisLongas(arr) {
    const maxLength = Math.max(...arr.map(str => str.length));
    return arr.filter(str => str.length === maxLength);
}