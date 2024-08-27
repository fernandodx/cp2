function ePalindromo(str) {
 
    str = str.toLowerCase();
    
    let inicio = 0;
    let fim = str.length - 1;
    
    while (inicio < fim) {

        if (str[inicio] === ' ') {
            inicio++;
            continue;
        }
        if (str[fim] === ' ') {
            fim--;
            continue;
        }
        
        if (str[inicio] !== str[fim]) {
            return false;  
        }
        
        inicio++;
        fim--;
    }
    
    return true; 
}

console.log(ePalindromo("Ame o poema")); 
console.log(ePalindromo("civic"));        
console.log(ePalindromo("geovana"));   