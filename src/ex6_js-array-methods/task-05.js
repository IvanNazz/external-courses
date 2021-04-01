const map = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];

    for (i = 0; i < length; i = i + 1) {
        results.push(callback.call(thisArg, arr[i], i, arr));
    }
    return results;
};
module.exports = map;
