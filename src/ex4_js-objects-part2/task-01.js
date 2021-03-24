function objProp(str, obj) {

return Object.getPrototypeOf(obj)[str];

}
module.exports = objProp;