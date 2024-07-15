// Array is a object ,it is resizable, array-copy opeeation create shallows operation

const myArr = [11,1,2,3,4,51]
const myheors = ["Atharv","gaikwad"]

const myArr2 = new Array(0,1,2,3,4)

console.log(myArr[0]);

// Array Methods



myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);



 myArr.unshift(9)
 myArr.shift()




console.log(myArr.includes(9));
console.log(myArr.indexOf(51));





const newArr = myArr.join();

console.log(newArr);
console.log(myArr);
console.log(typeof newArr);



// slice , splice





console.log("a" ,myArr);

const myn1 = myArr.slice(1,3)  // 1st is include and 3rd is not include

console.log(myn1);


console.log("B", myArr)

const myn2 = myArr.splice(2,5) // 2nd is include and 5rd is include
console.log(myn2);












