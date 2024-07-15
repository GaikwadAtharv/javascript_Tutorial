//*******Primitive data type*********// 

/*

String,Number,Boolean,Null,Undefined,symbol,BigInt

*/


const score = 100
const scorevalue = 100.3;

const islog = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

//const bigNumber = 1234567891234567789n






    //******Non primitive dataa type*******//

/*

Array,Function,Object

 */

const heros = ["Atharv" , "Gaikwad"]

let myObj = {
    name: "Atharv",
    age:21,
}

const myFunction = function(){
    console.log("hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsidetemp);
console.log(typeof scorevalue);
console.log(typeof myFunction);

//******Stack(Primitive) , Heap(Non-Primitive)****** //

let my = "Atharv"

let another = my
another = "Chaiaurcode"

console.log(my);
console.log(another);

let userone = {
    email:"user@goggle.com",
    upi:"userone@ybl",
}

let usertwo = userone

usertwo.email  = "Atharv@google.com"

console.log(userone.email);
console.log(usertwo.email);

    

