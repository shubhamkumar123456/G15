// Javascript --> programming language used to write logic and funcvtionality in website. discoverd by Brandon Eich.  firstly it was named as MOCHA. later it was named as live script and then finally it is changed as Echma script(java script). current version of JS is ES6.


// Before Node js , Js was used as client side only(only for frontend design). because JS runs in browser and browsers have Js Engine that run your JS code

// for example -->Chrome uses V8 Js engine , Mozilla firefox uses Spider monkey js engine 

// Node Js uses this V8 engine to run javascript code outside the Browser


// Ways to Write Js --> internal , external

// Topics --> 
// Variable
// Data types
// String and its method
// loops
// Array and its method
// Objects
// functions
// Callback function
// Promises
// Async Await
// DOM
// Project

//1) Variable --> variables are used to store the Data
// How to declare a variable in jS --> let , var , const

// example of let -->
// A)
//  let x = 20;
// let x = 45;
// console.log(x)  //can not redeclare in case of let

// b)
    // let b = 5;
    //     b= 6
    //     console.log(b) // reassign is possible in let

// Example of var -->
 // A)
//  var x = 20;
// var x = 45;
// console.log(x)  // redeclare in possible in var

// b)
    // var b = 5;
    //     b= 6
    //     console.log(b) // reassign is possible in var

// Example of const -->
 // A)
//  const x = 20;
// const x = 45;
// console.log(x)  // redeclare in not possible in case of const

// b)
    // const b = 5;
    //     b= 6
    //     console.log(b) // reassign is not possible in const



// DataType --> Primitive , NonPrimitive

// a)Primitive --> can store single value only
// Example --> number , string , boolean, undefined , null
// Number -->
    // let x = 10
    // console.log(x)  //10

// String -->
    // let name = "shubham" //  'shubham' ,  `shubham`;
    // console.log(name)
    // console.log(typeof name)
    // console.log(typeof x)

    // let digit = "101";
    // console.log(digit)
    // console.log(typeof digit)

// Boolean --> true ,false
// let a = true 
// console.log(a)
// console.log(typeof a)

// Undefined --> it is a default value used by JS, when a variable is declared but its value is not defined it gives undefined
    // let x;
    // console.log(x)  //undefined

// Null --> user defined that is equal to nothing

// let x = null
// console.log(x)
// console.log(typeof x);  object
 
// How to check dataType -->using typeOf operator


// NonPrimitive --> can store collection of data -->
// example --> Array , Object

// Array --> can store collection of data in indexing form 
let arr = [ 1, 20, "hello", true , [4,5,6]]
console.log(arr[0]) //1
console.log(arr[1]) //20
console.log(arr[2]) // hello
console.log(arr[3]) // true
console.log(arr[4])  // [4,5,6]
console.log(arr[4][2])  //6