Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;

  return function _curried(number) {
    numbers.push(number);
  
    if (numbers.length === numArgs) {
      console.log("apple")
      return that.apply(that, numbers);
    } else {
      return _curried;
    }
  }

  // return _curried
}

function sumThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
// console.log(sumThreeNumbers(1, 2, 3));
console.log(sumThreeNumbers.curry(3)(1)(2)(3));


// banana = new Function.curry(4);
// banana(5)(30)(20)(1)