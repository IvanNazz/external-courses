const arrEqual = function (arr) { 
    
    const firstEl = arr[0];
    let checkItem = true;

    arr.forEach(item => {
        if (firstEl !== item) {
            
            checkItem = false;
        }  
    });
    return checkItem;
};
module.exports = arrEqual;
