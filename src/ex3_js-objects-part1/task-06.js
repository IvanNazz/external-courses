const deepClone = function (obj) {
    const copyobj = {};
    // eslint-disable-next-line guard-for-in
    for(const key in obj) {
        const keyObj = obj[key];

        if (typeof keyObj === 'object') {
            if (Array.isArray(keyObj)) {
                let copyArr = [];
                
                for (let item of keyObj) {
                    copyArr.push(deepClone(item));
                }
                copyobj[key] = copyArr;
            } else {
                copyobj[key] = deepClone(keyObj);
            }
        } else {
            copyobj[key] = keyObj;
        }
    }

    return copyobj;
};
module.exports = deepClone;
