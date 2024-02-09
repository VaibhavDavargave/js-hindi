// Primitive

// 7 types: String, Number, Boolean, null , nudefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLogoIn  = false 
const outsideTemp = null
let userEmail;
const id = Symbol('id === anotherId');

const bigNumber = 8768876868n

// Reference(Non primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "vaibhav",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3