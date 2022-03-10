const MovingObject = require("./moving_object")
const Util = require("./util")


function Asteroid(options) {
    options.pos = options.pos
    options.color = 'blue'
    options.radius = 30
    options.vel = [10, 10]
    MovingObject.call(this, options)
}

Util.inherits(Asteroid, MovingObject)


// new MovingObject

module.exports = Asteroid;

// // Write a function `jumbleSort(string, alphabet)`.
// // Jumble sort takes a string and an alphabet. It returns a copy of the string
// // with the letters re-ordered according to their positions in the alphabet. If
// // no alphabet is passed in, it defaults to normal alphabetical order (a-z).
// //
// // The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
// //
// // **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
// //
// // Example:
// // jumbleSort("hello") => "ehllo"
// // jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'
// function jumbleSort(str, alphabet = null) {
//     alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
//     str = str.split('');
  
//     let sorted = false;
//     while (!sorted) {
//       sorted = true;
//       for (let i = 0; i < str.length; i++) {
//         if (i === str.length - 1) break;
//         let current = str[i];
//         let next = str[i + 1];
//         if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
//           str[i] = next;
//           str[i + 1] = current;
//           sorted = false;
//         }
//       }
//     }
  
//     return str.join('');
// }

// String.prototype.jumbleSort = function(alphabet = null) {
//     alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let newStr = this.split('');
//     let sorted = false;
//     while (!sorted) {
//       sorted = true;
//       for (let i = 0; i < newStr.length; i++) {
//         if (i === newStr.length - 1) break;
//         let current = newStr[i];
//         let next = newStr[i + 1];
//         if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
//           newStr[i] = next;
//           newStr[i + 1] = current;
//           sorted = false;
//         }
//       }
//     }
  
//     return newStr.join('');
// }

// console.log("hello".jumbleSort())


// // Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// // It should take an optional callback that compares two elements, returning -1 
// // if the first element should appear before the second, 0 if they are equal, and
// // 1 if the first element should appear after the second. Do NOT call the 
// // built-in Array.prototype.sort method in your implementation.
// //
// // Here's a summary of the quick sort algorithm:
// //
// // Choose a pivot element, then iterate over the rest of the array, moving the 
// // remaining elements on to the appropriate side of the pivot. Recursively quick 
// // sort each side of the array until a base case is reached. 
// Array.prototype.quickSort = function (callback) {
//     if (this.length < 2) return this;
  
//     if (!callback) {
//       callback = (x, y) => {
//         if (x < y) return - 1;
//         return 1;
//       };
//     }
  
//     const pivot = this[0];
//     let left = this.slice(1).filter((el) => callback(el, pivot) === -1);
//     let right = this.slice(1).filter((el) => callback(el, pivot) !== -1);
//     left = left.quickSort(callback);
//     right = right.quickSort(callback);
  
//     return left.concat([pivot]).concat(right);
// };

// function quickSort(array, callback) {
//     if (array.length < 2) return array;
  
//     if (!callback) {
//       callback = (x, y) => {
//         if (x < y) return - 1;
//         return 1;
//       };
//     }
  
//     let pivot = array[0];
//     let left = array.slice(1).filter((el) => callback(el, pivot) === -1);
//     let right = array.slice(1).filter((el) => callback(el, pivot) !== -1);
//     left = quickSort(left, callback);
//     right = quickSort(right, callback);
  
//     return left.concat([pivot]).concat(right);
// };

// // Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// // the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// // the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// // in your implementation.
// //
// // Here's a quick summary of the binary search algorithm:
// //
// // Start by looking at the middle item of the array. If it matches the target,
// // return its index. Otherwise, recursively search either the left or the right
// // half of the array until the target is found or the base case (empty array) is
// // reached.

// function binarySearch(sortedArray, target) {
//     if (sortedArray.length === 0) return -1

//     let midIdx = Math.floor(sortedArray.length / 2) 

//     if (sortedArray[midIdx] > target) {
//         return binarySearch(sortedArray.slice(0, midIdx), target) 
//     } else if (sortedArray[midIdx] === target) {
//         return midIdx
//     } else {
//         let result = binarySearch(sortedArray.slice(midIdx + 1), target)
//         return (result === -1) ? -1 : result + midIdx + 1
//     }
// }

// Array.prototype.binarySearch = function(target) {
//     if (this.length === 0) return -1

//     let midIdx = Math.floor(this.length / 2) 

//     if (this[midIdx] > target) {
//         return this.slice(0, midIdx).binarySearch(target)
//     } else if (this[midIdx] === target) {
//         return midIdx
//     } else {
//         let result = this.slice(midIdx + 1).binarySearch(target)
//         return (result === -1) ? -1 : result + midIdx + 1
//     }
// }


// // Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// // It should take an optional callback that compares two elements, returning
// // -1 if the first element should appear before the second, 0 if they are
// // equal, and 1 if the first element should appear after the second. Do NOT call
// // the built-in Array.prototype.sort method in your implementation. Also, do NOT
// // modify the original array.
// //
// // Here's a quick summary of the bubble sort algorithm:
// //
// // Iterate over the elements of the array. If the current element is unsorted
// // with respect to the next element, swap them. If any swaps are made before
// // reaching the end of the array, repeat the process. Otherwise, return the
// // sorted array.
// let defaultCallback = (num1, num2) => {
//     if (num1 < num2) {
//       return -1;
//     } else if (num1 === num2) {
//       return 0;
//     } else {
//       return 1;
//     }
// };
  
// Array.prototype.bubbleSort = function (callback) {
//     if (typeof callback !== "function") {
//       callback = defaultCallback;
//     }
  
//     let resultArr = this.slice();
//     let sorted = false;
//     while (!sorted) {
//       sorted = true;
//       for (let i = 1, n = resultArr.length; i < n; i++) {
//         if (callback(resultArr[i - 1], resultArr[i]) === 1) {
//           sorted = false;
//           let swap = resultArr[i - 1];
//           resultArr[i - 1] = resultArr[i];
//           resultArr[i] = swap;
//         }
//       }
//     }
//     return resultArr;
// };

// let defaultCallback = (num1, num2) => {
//     if (num1 < num2) {
//       return -1;
//     } else if (num1 === num2) {
//       return 0;
//     } else {
//       return 1;
//     }
// };
  
// function bubbleSort(array, callback) {
//     if (typeof callback !== "function") {
//       callback = defaultCallback;
//     }
  
//     let resultArr = array.slice();
//     let sorted = false;
//     while (!sorted) {
//       sorted = true;
//       for (let i = 1; i < resultArr.length; i++) {
//         if (callback(resultArr[i - 1], resultArr[i]) === 1) {
//           sorted = false;
//           let swap = resultArr[i - 1];
//           resultArr[i - 1] = resultArr[i];
//           resultArr[i] = swap;
//         }
//       }
//     }
//     return resultArr;
// };

// // Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// // should take an optional callback that compares two elements, returning -1 if 
// // the first element should appear before the second, 0 if they are equal, and 1 
// // if the first element should appear after the second. Define and use a helper 
// // method, `merge(left, right, comparator)`, to merge the halves. 
// //
// // **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// // opposed to a function expression (`const merge = function`) for `merge`. Do
// // NOT use the built-in `Array.prototype.sort` method in your implementation.**
// //
// // Here's a summary of the merge sort algorithm:
// //
// // Split the array into left and right halves, then merge sort them recursively
// // until a base case is reached. Use a helper method, merge, to combine the
// // halves in sorted order, and return the merged array.

// Array.prototype.mergeSort = function (callback) {
//     if (this.length <= 1) return this;
  
//     if (!callback) callback = (left, right) => {
//       return left < right ? -1 : left > right ? 1 : 0;
//     };
  
//     const midpoint = Math.floor(this.length / 2);
//     const sortedLeft = this.slice(0, midpoint).mergeSort(callback);
//     const sortedRight = this.slice(midpoint).mergeSort(callback);
//     return merge(sortedLeft, sortedRight, callback);
// };
  
// function merge(left, right, comparator) {
//     let merged = [];
  
//     while (left.length && right.length) {
//       switch (comparator(left[0], right[0])) {
//         case -1:
//           merged.push(left.shift());
//           break;
//         case 0:
//           merged.push(left.shift());
//           break;
//         case 1:
//           merged.push(right.shift());
//           break;
//       }
//     }
  
//     merged = merged.concat(left, right);
//     return merged;
// }

// function mergeSort(array, callback) {
//     if (array.length <= 1) return array;
  
//     if (!callback) callback = (left, right) => {
//       return left < right ? -1 : left > right ? 1 : 0;
//     };
  
//     const midpoint = Math.floor(array.length / 2);
//     const sortedLeft = mergeSort(array.slice(0, midpoint), callback);
//     const sortedRight = mergeSort(array.slice(midpoint), callback);
//     return merge(sortedLeft, sortedRight, callback);
// };
  
// function merge(left, right, comparator) {
//     let merged = [];
  
//     while (left.length && right.length) {
//       switch (comparator(left[0], right[0])) {
//         case -1:
//           merged.push(left.shift());
//           break;
//         case 0:
//           merged.push(left.shift());
//           break;
//         case 1:
//           merged.push(right.shift());
//           break;
//       }
//     }
  
//     merged = merged.concat(left, right);
//     return merged;
// }