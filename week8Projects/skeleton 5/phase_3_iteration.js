String.prototype.substrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {

    for (let j = i + 1; j <= this.length; j++) {
      // if (i !== j) {
      substrings.push(this.slice(i, j));
      // }
    }
  }
  return substrings;
}

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      const ele1 = this[i];
      const ele2 = this[i + 1];
      if (ele1 > ele2) {
        this[i + 1] = ele1;
        this[i] = ele2;
        sorted = false;
      }
    }
  }
  return this;
}