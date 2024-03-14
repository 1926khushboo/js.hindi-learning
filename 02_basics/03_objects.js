//we can declare object in js with two ways first is literal and second is constructor,
//when we create object with constructor then singleton objects form and 
//if we make in another way then it have multiple instance.
// Object.create ,creating object with constructor method

// object literals // creating object with literals method

const mySym = Symbol("key1") //way to create symbols

const JsUser = {
   // mySym: " mykey1", //we can declare symbol like this but when we check datatypes then it is a string ,so this is not a coorect way to declare symbols
   //output will same but only  datatype is different when we search

    name: "Khushboo",
    "fullname": "Khushboo Kumari",
    age: 18,
    location: "Patna",
    email: "khushboo1403@gmail.com",
    [mySym]: "mykey1" //this is good way  to declare symbol and it show datatype as symbol //Interview ques


}

// how to access object in js
//There are two ways 
console.log(JsUser.email)// in this method there is no need to write in double quote //this is not best way for access
console.log(JsUser["email"])// here need of double quote because in js string is always written in quote ,
//so when we access through this method then we have to use it
console.log(JsUser["fullname"])
console.log(JsUser[mySym])

JsUser.email = "hjjsgyfvcjhh@gamil.com" //this is a way for changing the value
Object.freeze(JsUser) // it is used for locking the object ,so we can't change the value of element in that object
JsUser.email = "gfdshjuik@gmail.com"
console.log(JsUser)




