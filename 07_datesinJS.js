// Dates

let mydate = new Date()
console.log(mydate.toJSON());
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);


let mycreatedDate = new Date(2023,0,23,5,3)
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleString());
let mycreateddate = new Date("2023-01-14")
console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mycreatedDate.getTime())
console.log(Date.now()/10000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());

//'${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday:"long",
  

})








