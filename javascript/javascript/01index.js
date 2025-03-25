// data and what opeartions can we perfrom on such data

// You should always know the type of data that you are working on

let number = 42; // Number

let text = "Hello"; // String

let isTrue = true; // Boolean

let nothing = null; // Object

let undefinedVar = undefined; // undefined

let symbol = Symbol(); // symbol

let person = {
  username: "firstname lastname",
  age: 22,
  isStudent: true,
};

// console.log(Array.isArray(person));

if (!isNaN("431")) {
  console.log("Not a number");
}

// console.log(Math.floor(Math.random() * 10) + 1 );

let firstname = "firstname";

let lastname = "lastname";

let fullname = firstname + " " + lastname;

// console.log(fullname.toUpperCase());

// maximum time emails are always in lowercase and cupons are always in upperscase 

console.log(fullname.indexOf('l'))
console.log(fullname.slice(0,5))