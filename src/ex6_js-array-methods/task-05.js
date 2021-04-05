const map = function(arr, callback, thisArg) {
    
    results = [];

    for (i = 0; i < arr.length; i = i + 1) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};
module.exports = map;
