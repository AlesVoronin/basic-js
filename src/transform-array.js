const CustomError = require("../extensions/custom-error");

module.exports =
    function transform(arr) {
  if (arr.length == 0) return arr;
  for (let i=0; i < arr.length; i++){
    if (arr[i] == "--discard-next"){
        for (let j=i+1; j < arr.length; j++){
          if (arr[j]){
            arr.splice(j,1);
            break;
          }
        }
        arr.splice(i,1);
        continue;
    }
    else if (arr[i] == "--discard-prev"){
      for (let j=i-1; j > 0; j--){
        if (arr[j]){
          arr.splice(j,1);
          break;
        }
      }
      arr.splice(i,1);
      continue;
    }
    else if (arr[i] == "--double-next"){
      for (let j=i+1; j < arr.length; j++){
        if (arr[j]){
          arr[j]*=2;
          break;
        }
      }
      arr.splice(i,1);
      continue;
    }
    else if (arr[i] == "--double-prev"){
      for (let j=i-1; j > 0; j--){
        if (arr[j]){
          arr[j]*=2;
          break;
        }
      }
      arr.splice(i,1);
      continue;
    }
  }
  clear(arr);
  return arr
};

function clear(arr){
  arr = arr.filter(function(x) {
    return x !== undefined && x !== null && x !== ""});
  return arr
}