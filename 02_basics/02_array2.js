//there are a way to concatenate two or more arrays
const arr1=["Thor","Ironman","Spiderman"];
const arr2=["Batsman","flash","superman"];
arr1.push(arr2);
//console.log(arr1);

// use concat to merge two or more arrays.for that you need to declare a variable in which you save that merge arr.We can't directly merge it.
const allhero=arr1.concat(arr2);
//console.log(allhero);

//spread way to merge(best way)
const all_new_hero=[...arr1,...arr2];
//console.log(all_new_hero);

console.log(Array.isArray("khushooo"))//for checking it is array or not.//output=false
console.log(Array.from("vinay"))//for converting into array.//output=['v','i','n','a','y']

//Array.of(n1,n2,n3,........)
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));//it also convert into array//output=[100,200,300]
