Array.prototype.uniqProto = function() {
  let uniques = [];
  this.forEach(ele => {
    if (!uniques.includes(ele)) {
      uniques.push(ele);
    }
  });
  return uniques;
};

// console.log(arrUniques([1,2,2,3]))

Array.prototype.twoSum = function() {
  let positions = [];
  this.forEach(ele => {
    this.forEach(ele2 => {
      if ((ele + ele2) === 0) {
        let pair = [this.indexOf(ele), this.indexOf(ele2)];
        positions.push(pair);
      }
    });
  });
  return positions;
};

Array.prototype.transposeProto = function() {
  let transposed = [];
  // let transposed = new Array(this.length)
  this.forEach((trr, i) => {
    let pair = [];
    trr.forEach((ele, j) => {
      pair.push(this[j][i]);
    });
    transposed.push(pair);
  });
  return transposed;
};

