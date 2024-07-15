// const tinderUser = new object()


const tinderUser  = {}

tinderUser.id = "123456"
tinderUser.name = "Atharv"
tinderUser.isloggedin = false

 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('isloggedin'));




const regularuser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
              firstname:"atharv",
              lastname:"Gaikwad",
        }
    }
}

console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a",4: "b"}
const obj4 = {5:"a",6: "b"}

 // const obj3 = {obj1,obj2}
 const obj3 = Object.assign({},obj1, obj2,obj4)
 console.log(obj3);

const obj5 = {...obj1, ...obj2};
console.log(obj5);


