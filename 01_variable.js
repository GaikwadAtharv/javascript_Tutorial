const account_ID=12345 /*const is keyword it is not changed */
let accountEmail="Atharv@gmail.com"  
var accountPassward="123"
accountcity="Rahata"
let accountstate;
// There are two method to declare variable "Let and var"
//account_ID=2  //not allowed
console.log(account_ID);
/*
   prefer not to use var
   because of issuue in block scope and functional scope 
*/ 

accountEmail = "SG@gmail.com"
accountPassward = "123456"
accountcity = "Shirdi"
console.log(accountEmail);



console.table([account_ID,accountEmail, accountPassward, accountcity,accountstate]);
