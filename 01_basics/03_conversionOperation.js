let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*
if score="33a", then valueInNumber=NaN.
if score=null, then typeof=object valueInNumber=0.
if score=undefined , then valueInNumber=NaN.
if score=true, then typeof=boolean, valueInNumber=1(True)/0(False).
*/

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);//for conversion in boolean.
//console.log(booleanIsLoggedIn);

/*
if isLogggedIn = "", booleanIsLoggedIn=false.
if isLoggedIn = "khushboo", booleanIsLogged=true;
*/
let n=33;
let abc=String(n); // for conversion in String
//console.log(typeof abc);
//console.log(abc);

//*******************************operation****************
let value=33;
let negvalue=-value;
console.log(negvalue);

console.log("1"+2+3); //output=123 , agar pale string hai to sabko string hi laake chalega aue simply print karega sare no ko
console.log(1+"2");//output=12 
console.log(1+2+"3");//output=33 , agar string baad ma hai to jetana bhi number hai sabko plus kar dega and string ko waise hi print kar dega

console.log(+true);//output=1;
console.log(true+);//output=error;
console.log(+"");//output=0;

