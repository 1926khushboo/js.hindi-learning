const score=400;
const balance=new Number(100); //if we want data type to be number only.
//console.log(balance);


//.toFixed()  //how many decimal places you need to print.
const balance2=balance.toString();
//console.log(balance2.length);
//console.log(balance.toFixed(2));//it will show upto 2 decimal places. ex->100.00


//toPrecision()  //it will give precise value upto where you want.
const otherNumber=123.8966;
//console.log(otherNumber.toPrecision(3)); //output-> 123.9   and if toPrecision(3),then value will be 124


//.toLocaleString()  //i gives the given value in number system having commas in between them.
const hundred=1000000;
//console.log(hundred.toLocaleString());//it will give the according to US number system like->1,000,000;
//console.log(hundred.toLocaleString('en-IN'));// now it will give according to Indian number system like-> 10,00,000

/*maths***************************************************** */

// console.log(Math.abs(-4));//it will make the negative value to positive.
// console.log(Math.round(4.3))//it represents according to basic maths.
// console.log(Math.min(2,5,3,7,8)); // 3
// console.log(Math.max(2,5,3,7,8)); // 8
// console.log(Math.floor(3.0)); //it gives the nearest lowest integer. 3.1,3.2....3.9 for all these the output will be 3.
// console.log(Math.ceil(3.0));  //it gives the nearest largets integer. 3.1,3.2....3.9 for all these the output will be 4.


Math.random() //it gives the value between 0 an 1 both inclusive.
//basically you can use it to build ludo game where the value is fixed between 1 and 6.

//console.log(Math.random()); //it wil give the value between 0 and 1 (both inclusive).
//console.log(Math.floor(Math.random()*10)+1);// we are multiplying 10 to get 1 value to the left(before decimal) and we are adding +1 in order to get the value more than 0.

// if we want the values to be in a specific range then we can do the below process.
const min=10;
const max=20;
//console.log(Math.floor(Math.random()*(max-min+1))+min);