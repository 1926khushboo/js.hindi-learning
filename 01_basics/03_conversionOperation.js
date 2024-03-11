let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
if score="33a", then valueInNumber=NaN.
if score=null, then typeof=object valueInNumber=0.
if score=undefined , then valueInNumber=NaN.
if score=true, then typeof=boolean, valueInNumber=1(True)/0(False).
*/

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);//for conversion in boolean.
console.log(booleanIsLoggedIn);

/*
if isLogggedIn = "", booleanIsLoggedIn=false.
if isLoggedIn = "khushboo", booleanIsLogged=true;
*/
let n=33;
let abc=String(n); // for conversion in String
console.log(typeof abc);
console.log(abc);