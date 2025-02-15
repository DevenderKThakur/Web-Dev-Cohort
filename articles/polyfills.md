# Polyfills - Bridging gaps in javascript

- A polyfill is a piece of JavaScript code that replicates the functionality of modern features in older browsers that do not support them natively.

- It allows developers to write modern JavaScript while ensuring compatibility with older environments.

### Few Examples of Polyfills in Array

- Reverse(reverse the array)

```js
if (!Array.prototype.myReverse) {
  Array.prototype.myReverse = function () {
    if (this.length === 0) {
      return [];
    }
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      [this[start], this[end]] = [this[end], this[start]];
      start++;
      end--;
    }
    return this;
  };
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myReverse());
```

- Reduce pollyfils

```js
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn, initialVal) {
    let accumalator = initialVal !== undefined ? initialVal : this[0];
    let currentVal = initialVal !== undefined ? 0 : 1;
    for (let i = currentVal; i < this.length; i++) {
      accumalator = userFn(accumalator, this[i]);
    }
    return accumalator;
  };
}

const arr = [1, 2, 3, 4, 5];

const val = arr.myReduce(
  (accumlator, currentval) => accumlator + currentval,
  0
);

console.log(val);
```

- Concat (It is used to merge two array in one )

```js
if (!Array.prototype.myConcat) {
  Array.prototype.myConcat = function (arr) {
    return [...this, ...arr];
  };
}

const numsArr = [1, 2, 3, 4, 5];

console.log(numsArr.myConcat([6, 7, 8, 9]));
```

- ForEach

```js
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}
```

- Map

```js
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let val = userFn(this[i], i);
      result.push(val);
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleArr = arr.myMap((item) => item * 2);

console.log(doubleArr);
```

- Filter (returns the array only after checking the condition )

```js
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i], i)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArr = arr.myFilter((item) => item % 2 === 0);

console.log(evenArr);
```
