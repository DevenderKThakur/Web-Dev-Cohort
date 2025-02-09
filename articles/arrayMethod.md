# Array and it's method

- Refrence <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Link to the docs </a>

### Array in Javascript

- In JavaScript, arrays are a type of object that can store multiple values at once
- The elements are stored in a specific order and can be accessed by their index.
- Arrays can store elements of any type, including numbers, strings, objects, and even other arrays.

```js
const myArr = [0, 1, 2, 3, 4, 5]; // declare array

console.log(myArr[0]); // access first val in array

const myHeros = ["shaktiman", "naagraj", "doga"];

const myArr2 = new Array(1, 2, 3, 4, 5); // another way to declare array

console.log(myHerso.length); // gives the length of the array
```

### Array methods in Javascript

- Push ( Adds the value at the end of array )

```js
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // 1,2,3,4,5,6
```

- Pop (removes the last value in the arr )

```js
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // 1,2,3,4
```

- Unshift (Adds the value at first index of the array )

```js
let arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // 0,1,2,3,4,5
```

- Shift (Removes the first val from the arr )

```js
let arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); // 1,2,3,4,5
```

- Includes (Checks the value in the array )

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(9)); // false
```

- IndexOf (Gives the index of the val)

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(9)); // -1
```

- Join (coverts the array into string )

```js
let arr = [1, 2, 3, 4, 5];

let strArr = arr.join();

console.log(typeof strArr); //string
```

- Slice (returns the copy of a section of an array )

```js
let arr = [1, 2, 3, 4, 5];

let myarr1 = arr.slice(1, 3); // 3 is not included

console.log(myarr1);
```

- Splice (modifies the original array and removes values as per index )

```js
let arr = [1, 2, 3, 4, 5];

let myarr1 = arr.splice(1, 3);

console.log(myarr1); // [2,3,4]
console.log(arr); // [1,5]
```

- Concat (This returs a new array combining the arrays as per choice )

```js
const marvel_heros = ["ironman", "spiderman", "thor"];

const dc_heros = ["batman", "superman", "flash"];

const all_heros = marvel_heros.concat(dc_heros);

console.log(all_heros); // ["ironman" , "spiderman" , "thor","batman" , "superman" , "flash"]

// spread opeartor
console.log([...marvel_heros, ...dc_heros]); // same output
```

- Flat ( removes all the sub array and makes one complete array )

```js
const arr = [1, 2, 3, [4, 5], [7, 8, 9]];

const another_arr = arr.flat(Infinity);

console.log(another_arr);
```

- isArray (checks that value given is an array or not )

```js
console.log(Array.isArray([1, 2, 3, 4])); // true

console.log(Array.isArray("username")); // false
```

- From (converts any value into an array )

```js
console.log(Array.from("abc")); // ["a" , "b" , "c"]
```
