function getMinMax(str) {
  let numArray = str.split(" ").filter(item => isFinite(item) == true);
  let minNum = Math.min.apply(null, numArray)
  let maxNum = Math.max.apply(null, numArray);
  let result = {
    min: minNum,
    max: maxNum
  }
  return result
}

