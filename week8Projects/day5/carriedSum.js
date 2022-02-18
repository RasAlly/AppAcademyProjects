function curriedSum(numArgs) {
  let numbers = []

  return function _curriedSum(number) {
    numbers.push(number)

    if (numbers.length === numArgs) {
      let total = 0

      numbers.forEach((num) => total += num)

      console.log(total)
    } else {
      return _curriedSum
    }
  }
}

curriedSum(4)(5)(30)(20)(1);
// sum(5)(30)(20)(1);