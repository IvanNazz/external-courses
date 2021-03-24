function oddEven(arr) { 
    
    let sumEven = 0;
    let sumOdd = 0;
    let sumZero = 0;

    arr.forEach(item => {
        if (item !== null) {
            if (item === 0) {
                sumZero = sumZero +=1;
            } else if (item % 2 === 0) {
                    sumEven = sumEven +=1;
                } else {
                    sumOdd = sumOdd +=1;
            }
        }
    });
    return [sumEven, sumOdd, sumZero];
};
module.exports = oddEven;
