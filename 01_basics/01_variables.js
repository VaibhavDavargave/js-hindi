const accoundId = 144532
let accountEmail = "vaibhav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accoundId = 2 //not allowed

accountEmail = "vaishali@gmail.com"
accountPassword = "65435"
accountCity = "Benguluru"

console.log(accoundId);

console.table([accoundId, accountEmail, accountPassword , accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/