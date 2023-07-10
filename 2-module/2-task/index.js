function isEmpty(obj) {
  result = 0;
  for(let key in obj){
    if (key === undefined){
      result += 1
    }
  }
  return result == Object.keys(obj).length
}
