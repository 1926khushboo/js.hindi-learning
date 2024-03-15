//Creating objects using constructor(singleton)

//const tinderuser = new Object() //we can declare object like this also //output will same {} //this is singleton object

const tinderuser = {} ////we can declare object like this also //output will same {} //this is non-singleton  object

tinderuser.id = "123"
tinderuser.name = "khushboo"
tinderuser.isloggedin = false

//console.log(tinderuser);

const regularuser ={  //we can create multiple object inside a object.
    email: "jkhdjfyc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "khushboo",
            lastname: "kumari"
        }
    }
}
//console.log(regularuser.fullname.userfullname); //if we have to access next like username we can simple write with .

//we can combime one or more objects like array

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = { obj1, obj2 }// if we use this syntax then our output is like this {obj1: {1: "a", 2: "b"} , obj2:  {3: "c", 4: "d"}}
//const obj3 = Object.assign({}, obj1, obj2) // here we use parenthesis it is not compuslory but good, output will same //output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = {...obj1, ...obj2}  //this is called spread method//this is latest method for combining // output ={ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3);

//when values coming from databases

const users = [
    {
        id: 1,
        email: "cbdfht@gmail.com"
    },
    {
        id: 1,
        email: "cbdfht@gmail.com"
    },
]
 users[1].email //for access data in databae
 console.log(tinderuser); // output{ id: '123', name: 'khushboo', isloggedin: false }

 console.log(Object.keys(tinderuser)); //for access the key // output [ 'id', 'name', 'isloggedin' ]
 console.log(Object.values(tinderuser)); //for access the values // output [ '123', 'khushboo', false ]
 console.log(Object.entries(tinderuser)); // it convert key  and values in array //output[ [ 'id', '123' ], [ 'name', 'khushboo' ], [ 'isloggedin', false ] ]

 //for checking the values is existing or not
 console.log(tinderuser.hasOwnProperty('inloggesin')); //if key is not there output will 
 
 //destructuring of object************************************************

 const course = {
    coursename: "js.hindi",
    price: "999",
    courseinstructor: "Khushboo"
 }
  
  //course.courseinstructor ////this is a syntax to use object
  const {courseinstructor: instructor} = course//this is a syntax to use object 
  // this way we can destructure ,Here courseinstructor is so big, we simply write instructor and our output is same
  //console.log(courseinstructor);
  console.log(instructor); //output Khushboo

  //example how destructuring happening in reactjs
 // const navbar = ({company}) => {    //the value written in double quote is destucturing

 // }

  //navbar(company = "hitesh")

  //*************** API*****************//
  //API means jab aapna kaam kese aur  sa karwana ho 
  //now value of api is coming in json previously it was in xml which was very complex

 // {      json syntax
   // "name": "Khushboo",
    //"coursename": "js is hindi",
    //"price": "free"

 // }
//API is javascript notation 





