function checkNamber (num) { 
    if (num > 1000 || num < 2) {
        return 'Данные неверны'
    }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `Число ${num} - составное число`
            }
            
        }
    return `Число ${num} - простое число`
};
module.exports = checkNamber;
