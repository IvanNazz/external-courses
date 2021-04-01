const filter = function(arr, callback, thisArg) {
    let i, length = arr.length, results = [];

    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
        results.push(arr[i]);
        }
    }
    return results;
};
module.exports = filter;
