function stringsMaisLongas(inputArray) {
    let maxLength = 0;
    let result = [];


    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length;
        }
    }


    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === maxLength) {
            result.push(inputArray[i]);
        }
    }

    return result;
}

let inputArray = ["if", "geo", "aulas", "bra", "ifbb"];
console.log(stringsMaisLongas(inputArray)); 
