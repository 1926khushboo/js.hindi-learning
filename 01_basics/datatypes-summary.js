/*
Primitive data types:
String, Number, Boolean, null(ek dm khaali), 

undefined(variable is declared but not initialized and memory is also declared. ex-> let state),

symbol(it will make value unique. ex-> const id=Symbol('123'); const id2=Symbol('123'); 
Although if you assign equal values to two or more variables, it will still make the values different from each other.), 

BigInt(used for sceintific values or very much bigger values).
ex-> const bigNumber=11235638254327572946n; no matter how big the number is, just add 'n' at the last of the value.
by doing so, it will automatically convert it into BigInt.
*/

/*
Refernces (Non-Primitive data types): the datatypes of all non-primitive, is said to be function and the return type of function is said to be object function.
Arrays, Objects, Functions.

Arrays:
const arr=["vinay", "kumar", "age"];

Objects:
let dog:{
    breed:"Rotweiler",
    height:"4ft",
}


Functions:
const myFunction=function(){
    console.log("Hello world");
}
*/

/*
Is javascript is dynamic or static?
JavaScript is a dynamically typed language. This means that the type of a variable is not declared
when the variable is created, but is instead determined by the value that is assigned to the variable. 
For example, the following code is valid JavaScript:

let x = 5; // x is a number
x = "hello"; // x is now a string
*/

/*
the typeof operator link (for interview purpose): 13.5.3 The typeof Operator
https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-typeof-operator

*/


//************************************************************************** 
// Primitive Datatype(Means it is Stack  and it is copy of data) , Non-primitive datatype(Heap)
let myyoutubename = " khushbookumari1403@gmail.com"
let anothername = " myyoutubename "
anothername = " chaiandcode "
console.log(myyoutubename);
console.log(anothername);
//In case of primitive datatype
// In case of stack it will update only current value not previous ,like we are taking anothername = myyoutubename and then we change the value of anothername , so only anothername will change ,myyoutubename value is same as previous value. 

//In case of Non-primitive datatype
let userone = {
    email : "khushbookhumari14032gmail.com",
    upi : "agsiu@ybl"
}
 let usertwo = userone
 usertwo.email="kjhgffdd@gmail.com";

 console.log(usertwo.email);
 console.log(userone.email);

 // in case of heap(it will give reference value) it will update the value in both place;