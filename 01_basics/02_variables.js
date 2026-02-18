const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Bihar"

accountEmail = "viv@ek.com"
accountPassword = "2121212"
accountCity = "jharkhand"
/* never use var bcoz issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
