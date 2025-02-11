const arr = [1, 2, 3, 4, 5, 6, 7];

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

// arr.myForEach((item)=>console.log(item))

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

if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (userFn) {
    let result = undefined;
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result = this[i];
        break;
      }
    }
    return result;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn, initialVal) {
    let accumalator = initialVal !== undefined ? initialVal : this[0];
    let startIndex = initialVal !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      accumalator = userFn(accumalator, this[i]);
    }
    return accumalator;
  };
}

const doubleArr = arr.myMap((item) => item * 2);

const evenElement = arr.myFilter((item) => item % 2 === 0);

const element = arr.myFind((item) => item > 4);

const sum = arr.myReduce((acc, currentval) => acc + currentval);

console.log(sum);
