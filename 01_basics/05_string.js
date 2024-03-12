const name = "khushboo"
const repocount = "50" //way to declare string

// console.log(name + repocount + " Value"); way to declare strings but not a good way to concatenate s astring

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); // modern way of declaring  a string

const gameName = new String('khushboo')

console.log(gameName[0]);//gives string at 0
console.log(gameName.__proto__);
console.log(gameName.length);//gives length of string
console.log(gameName.toUpperCase());//convert into uppercase
console.log(gameName.charAt(2));//gives value at 2
console.log(gameName.indexOf('h'));//give position of h
console.log(gameName.substring(0,4));//give you starting of 4  values