//array  // size of the array is not fixed i.e, resizable in javascript. Not in java/c/c++..etc.

const arr=[1,2,3,4,5];
//console.log(arr[3]);//4

//Array methods
//push //add the element at the last
arr.push(6);
//console.log(arr);

//pop()  //delete the last element.
arr.pop();
//console.log(arr);

//unshift() //it will add the elements at the start of the array.
arr.unshift(9);
//console.log(arr);

//shift()
arr.shift();  //it will delete the fist element of the array.
// console.log(arr);

//includes() //it will tell whether the element is present or not and return true/false.
//console.log(arr.includes(9)); //false, bcz it is not present in the array.

//indexOf()  //it will the tell the position of first occurence of that element.
//console.log(indexOf(3)) //2, position.

//join()  //it will join the existing array and converts into string.
//console.log(arr); // [1,2,3,4,5]   type->object 
const newarr=arr.join();
//console.log(newarr); // 1,2,3,4,5  type->string

//slice, splice
console.log(arr); //[1,2,3,4,5]
const arr3=arr.slice(1,3);//it will include (start,end(not inclusive)). output->[2,3]
console.log(arr3);
//console.log(arr);//slice doesn't impact on original arr.[1,2,3,4,5]
const arr4=arr.splice(1,3);// it will include (start,end) both inclusive. output->[2,3,4]
console.log(arr4);
//console.log(arr);//splice remove the (start to end) elements from the original arr. [1,5]