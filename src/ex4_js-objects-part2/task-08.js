const toCamelCase = (str) => {

  let str = str.toLowerCase;
  const arr = str.split(' ');
  let newString = "";
  
  arr.forEach((el, i) => {
    if (i === 0){
    newString += el.toLowerCase();
      }else{
      newString += el.slice(0, 1).toUpperCase() + el.slice(1);
    }
  });

  return newString
}
module.exports = toCamelCase;
