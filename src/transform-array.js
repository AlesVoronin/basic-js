const CustomError = require("../extensions/custom-error");

module.exports =
function transform(arr) {
    if (arr.length == 0) return arr;
    let not_empty = 0
    for (let i =0; i < arr.length; i++){
        if (arr[i]){
          not_empty++;
        }
    }
    if(not_empty == 0){
      return [];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") {
            if (arr[i + 1]) {
                arr.splice(i + 1, 1, null);
            }
            arr.splice(i, 1, null);
            continue;
        } else if (arr[i] == "--discard-prev") {
            if (arr[i - 1]) {
                arr.splice(i - 1, 1, null);
            }
            arr.splice(i, 1, null);
            continue;
        } else if (arr[i] == "--double-next") {
            if (arr[i + 1] || arr[i + 1] == null || arr[i + 1] == 0) {
                arr[i] = arr[i+1];
            }
            continue;
        } else if (arr[i] == "--double-prev") {
            if (arr[i - 1] || arr[i - 1] == null || arr[i + 1] == 0) {
                arr[i] = arr[i-1];
            }
            continue;
        }
    }
    clear(arr);
    return arr
};

function clear(arr) {
    // arr = arr.filter(function (x) {
    //     return x !== undefined && x !== null && x !== ""
    // });
    for (let i=0; i < arr.length; i++){
      if (arr[i] == null || arr[i] == NaN || arr[i] == 0){
        arr.splice(i,1);
        i--;
      }
    }
    return arr
}