// Primitive

// 7 types: Strings,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);
//const bigNumber = 45678901234567n;

//Reference (Non Primitive)
//array,objects, functions

const heroes = ["Ironman" ,"CaptainAmerica" ,"BlackPanther"];
let myObj = {
    name:"Meowaaz",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");

}
console.log(typeof  bigNumber);

// *******************************

// Stack (Primitive) ,Heap (Non Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);






