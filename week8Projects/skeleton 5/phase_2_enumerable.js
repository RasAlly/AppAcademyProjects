
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    const ele = this[i];
    // this.ele = this[i];
    // callback.call(this)
    callback(ele)
  }
};

const printVal = function(ele) {
  // console.log(this.ele);
  console.log(ele);
}


Array.prototype.myMap = function(callback) {
  let mapped = [];

  this.myEach(ele => {
    // console.log(ele)
    // this.ele = ele;
    let result = callback(ele);
    mapped.push(result);
  });
  return mapped;
}

const doubler = function(ele) {
  // console.log(ele);
  return ele * ele;
}