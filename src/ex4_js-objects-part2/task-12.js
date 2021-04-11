
const sumNum = function (num1, num2) {
    
    const sum = num1 + num2;
    const sumFix = Number(sum.toFixed(3));
    
    return sumFix;
};
module.exports = sumNum;
