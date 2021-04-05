const some = function(arr, callback, thisArg) {
    for (i = 0; i < arr.length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
        }
    }
    return false;
};
module.exports = some;
