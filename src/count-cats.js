const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix = matrix.flat(2);
  for (let i = 0; i < matrix.length; i++){
      if (matrix[i] == "^^"){
        count ++;
      }
    }

  return count;
}
