const capitalize = function (str) {
        let newStr = "";
        
        for (i = 0; i < str.length; i++) {
            if (str[i - 1] === " " || i === 0) {
            newStr += str[i].toUpperCase();
            } else {
            newStr += str[i];
        }
    }

        return newStr;
        
};
module.exports = capitalize;
