function palindromo(str) {
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char !== ' ') { 
        cleanedStr += char.toLowerCase();
      }
    }

    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
      reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
  }
  
  console.log(palindromo("civic")); 
  console.log(palindromo("ovo"));