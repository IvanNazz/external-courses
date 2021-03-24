const updateStr = (str, subStr, num) => {

  let arr = str.split(' ');
  
  arr.splice(num + 1, 0, subStr)
  return arr.join(' ');
}
module.exports = updateStr;