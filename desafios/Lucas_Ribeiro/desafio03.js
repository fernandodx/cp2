function checkPalindromo(str) {
    
    const strNormalizada = str.replace(/\s+/g, '').toLowerCase();
   
    return strNormalizada === strNormalizada.split('').reverse().join('');
}