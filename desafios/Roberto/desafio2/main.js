function defineSeculo(ano) {
    if (ano % 100 === 0) {
        console.log(`Seculo ${ano}`);
        return ano / 100;
    } else {
        let divide = ano / 100;
        let int = parseInt(divide) + 1;
        console.log(`Seculo ${ano}`);
        return int;
    }
}
defineSeculo(2024);
defineSeculo(201);
defineSeculo(1805);
defineSeculo(1950);
defineSeculo(2000);
defineSeculo(1000);