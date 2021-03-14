const CustomError = require("../extensions/custom-error");

module.exports =
    function createDreamTeam(members) {
  let result = "";
  //members = members.filter(member => isNaN(member));
  for (let i=0;i < members.length;i++) {
    if (typeof members[i] != 'string'){
      delete members[i]
      continue
    }
    members[i] = members[i].replace(/\s+/g, '')
  }
  members = members.filter(member => member!= null)
  members.sort();
  for (let i=0;i < members.length;i++){
    members[i] = members[i].toUpperCase();
    result += members[i].charAt(0);
  }
  result.split('').sort().join();
  if (result == '') return false
  return result;
};
