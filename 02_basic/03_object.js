// singleton
//object.create 

// object literals



const mysym = Symbol("key1")


const jsUser = {
    name:"Atharv",
    "full Name":"Atharv Gaikwad",
    [mySym]:"mykey1",
    age :20,
    location: "Rahata",
    email: "gaikwadatharv821@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

}
/*

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full Name"])
console.log(jsUser[mySym])

*/

jsUser.email = "gaikwadatharv.gmail.com"
Object.freeze(jsUser)
jsUser.email =  "gaikwadatharv.gmail.com"

console.log(jsUser.email)



jsUser.greeting = function(){
    console.log("hello");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log('hello js user,${this.name}');
}
console.log(jsUser.greetingTwo());