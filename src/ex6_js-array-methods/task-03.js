const every = function(arr, callback, thisArg) {
    let i, length = arr.length;

    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};
module.exports = every;
