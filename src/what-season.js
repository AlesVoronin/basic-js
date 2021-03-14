const CustomError = require("../extensions/custom-error");
const SPRING = "spring";
const SUMMER = "summer"
const AUTUMN = "autumn"
const WINTER = "winter"

module.exports =
    function getSeason(date ) {
  let result = "";
  if (date.getMonth() != null) {
    if (date.getMonth() >= 0 && date.getMonth() <= 1 || date.getMonth() == 11) {
      result = WINTER;
    } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
      result = SPRING;
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      result = SUMMER
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
      result = AUTUMN;
    }
  }
  else if (date == null){
    result = "Unable to determine the time of year!";
  }
  else result = null
  return result;
};
