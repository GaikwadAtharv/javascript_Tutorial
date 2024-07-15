const name= "Gaikwad"
const repocount = 20

console.log("hello my namr is ${name} and my repocount is ${repocount}");


const game = new String('Gaikwad_Atharv')


console.log(game[0]);
console.log(game[1]);
console.log(game._proto_);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(10));
console.log(game.indexOf('h'));
console.log(game.substring());

const newString = game.substring(0,4)
console.log(newString);

const anotherString = game.slice(-8,2)
console.log(anotherString);

const newStringOne = "  Atharv  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))
console.log(url.includes('Atharv'))

console.log(game.split('-'));



