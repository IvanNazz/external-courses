const every = function(arr, callback, thisArg) {
    for (i = 0; i < arr.length; i = i + 1) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};
module.exports = every;
