const filter = function(arr, callback, thisArg) {
    const results = [];

    for (i = 0; i < arr.length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
        results.push(arr[i]);
        }
    }
    return results;
};
module.exports = filter;
