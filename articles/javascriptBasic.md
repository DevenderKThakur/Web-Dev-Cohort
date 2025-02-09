# Javascript Basic - The Language of Web

### Understanding variables and Data Types in JS

- Javascript is dynamically typed language , meaning you don't need to explicitly write the data type of a variable

### 1. Declaring variables in Javascript

- var (avoid using it )
- let (block scoped , can be reassigned )
- const (cannot be reassigned)

```js
var firstname = "xyz";
let lastname = "abc";
const password = "password";
```

### 2. Data Types in Javascript

- Primitive Data type (Stored by Value):
  - String (Sequence of characters)
  ```js
  const username = "firstname lastname";
  ```
  - Number (Integer or floating-point number)
  ```js
  const age = 22;
  const temp = 33.7;
  ```
  - Boolean (Represents truthy or falsy value)
  ```js
  const isLoggedIn = true;
  const isDumb = false;
  ```
  - Undefined (A variable declared but not assigned a value)
  ```js
  let salaryCredited;
  let value = undefined;
  ```
  - Null (Represents an intentional empty value)
  ```js
  let obtainSkills = null;
  ```
- Non Primitive Data Type (Stored by Reference):

  - Arrays (Ordered list of values)

  ```js
  const marvel_heros = ["Iron-man", "Spiderman", "Hulk"];
  const dc_hreos = new Array("Supernman", "Flash", "Batman");
  ```

  - Objects (Collection of key-value pairs)

  ```js
  const person = {
    firstname: "xyz",
    lastname: "abc",
    isLoggedIn: false,
    address: {
      stateCode: "DEL",
      countryCode: "IN",
    },
  };
  // display the value in the object
  console.log(person.firstname);
  // De-Structuring the object
  const { firstname } = person;
  console.log(firstname);
  ```

  - Function (Block of reusable code)

  ```js
  function greet(username) {
    return `Hello ${username}`;
  }
  greet("xyz"); // function call
  ```

### 3. How to check the data types in Javscript

- Use the typeof operator to check the type of a variable.

```js
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object (Arrays are a type of object)
console.log(typeof function () {}); // function
```

### 4. Summary

- Variables are declared using let, const, or var (avoid var).
- Primitive types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
- Non-primitive types: Object, Array, Function.
- Use typeof to check data types.
