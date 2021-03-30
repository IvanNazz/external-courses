const objProp = function (str, obj) {

return Object.getPrototypeOf(obj)[str];
}
module.exports = objProp;
