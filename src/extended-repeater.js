const CustomError = require("../extensions/custom-error");

module.exports =
    function repeater(str, options) {

      options.repeatTimes; // устанавливает набор number повторов str
      options.separator; // это string разительное повторение str
      options.addition; // является дополнительным, string которое будет добавляться к каждому повторению str
      options.additionRepeatTimes; // устанавливает набор number повторов addition
      options.additionSeparator; // это string разделительное повторение addition

  let result_string = "";
  str = String(str);
  if (typeof options.addition != 'undefined') {
    options.addition = String(options.addition);
  }
  if (!options.separator){
    options.separator = "+";
  }
  if (!options.repeatTimes){
    options.repeatTimes = 1;
  }
  if (!options.additionSeparator){
    options.additionSeparator = "|";
  }
  if (!options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  }



  for (let i=0; i < options.repeatTimes; i++){
    result_string += str;
    if (options.addition) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        result_string += options.addition;
        if (j!= options.additionRepeatTimes-1) {
          result_string += options.additionSeparator
        }
      }
    }
    if (i!= options.repeatTimes-1) {
      result_string += options.separator;
    }
  }
  return result_string;
};
  