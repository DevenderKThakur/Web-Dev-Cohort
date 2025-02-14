if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    for (let i = 0; i < this.length; i++) {
      userFn(this[i], i);
    }
  };
}

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

if (!Array.prototype.myReverse) {
  // reverse and array using myReverse
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

if (!Array.prototype.myConcat) {
  Array.prototype.myConcat = function (arr) {
    return [...this, ...arr];
  };
}
