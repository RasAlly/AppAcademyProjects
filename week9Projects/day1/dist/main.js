/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\n\nfunction Asteroid(options) {\n    options.pos = options.pos\n    options.color = 'blue'\n    options.radius = 30\n    options.vel = [10, 10]\n    MovingObject.call(this, options)\n}\n\nUtil.inherits(Asteroid, MovingObject)\n\n\n// new MovingObject\n\nmodule.exports = Asteroid;\n\n// // Write a function `jumbleSort(string, alphabet)`.\n// // Jumble sort takes a string and an alphabet. It returns a copy of the string\n// // with the letters re-ordered according to their positions in the alphabet. If\n// // no alphabet is passed in, it defaults to normal alphabetical order (a-z).\n// //\n// // The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'\n// //\n// // **Do NOT use the built-in `Array.prototype.sort` in your implementation.**\n// //\n// // Example:\n// // jumbleSort(\"hello\") => \"ehllo\"\n// // jumbleSort(\"hello\", ['o', 'l', 'h', 'e']) => 'ollhe'\n// function jumbleSort(str, alphabet = null) {\n//     alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');\n//     str = str.split('');\n  \n//     let sorted = false;\n//     while (!sorted) {\n//       sorted = true;\n//       for (let i = 0; i < str.length; i++) {\n//         if (i === str.length - 1) break;\n//         let current = str[i];\n//         let next = str[i + 1];\n//         if (alphabet.indexOf(current) > alphabet.indexOf(next)) {\n//           str[i] = next;\n//           str[i + 1] = current;\n//           sorted = false;\n//         }\n//       }\n//     }\n  \n//     return str.join('');\n// }\n\n// String.prototype.jumbleSort = function(alphabet = null) {\n//     alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');\n//     let newStr = this.split('');\n//     let sorted = false;\n//     while (!sorted) {\n//       sorted = true;\n//       for (let i = 0; i < newStr.length; i++) {\n//         if (i === newStr.length - 1) break;\n//         let current = newStr[i];\n//         let next = newStr[i + 1];\n//         if (alphabet.indexOf(current) > alphabet.indexOf(next)) {\n//           newStr[i] = next;\n//           newStr[i + 1] = current;\n//           sorted = false;\n//         }\n//       }\n//     }\n  \n//     return newStr.join('');\n// }\n\n// console.log(\"hello\".jumbleSort())\n\n\n// // Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. \n// // It should take an optional callback that compares two elements, returning -1 \n// // if the first element should appear before the second, 0 if they are equal, and\n// // 1 if the first element should appear after the second. Do NOT call the \n// // built-in Array.prototype.sort method in your implementation.\n// //\n// // Here's a summary of the quick sort algorithm:\n// //\n// // Choose a pivot element, then iterate over the rest of the array, moving the \n// // remaining elements on to the appropriate side of the pivot. Recursively quick \n// // sort each side of the array until a base case is reached. \n// Array.prototype.quickSort = function (callback) {\n//     if (this.length < 2) return this;\n  \n//     if (!callback) {\n//       callback = (x, y) => {\n//         if (x < y) return - 1;\n//         return 1;\n//       };\n//     }\n  \n//     const pivot = this[0];\n//     let left = this.slice(1).filter((el) => callback(el, pivot) === -1);\n//     let right = this.slice(1).filter((el) => callback(el, pivot) !== -1);\n//     left = left.quickSort(callback);\n//     right = right.quickSort(callback);\n  \n//     return left.concat([pivot]).concat(right);\n// };\n\n// function quickSort(array, callback) {\n//     if (array.length < 2) return array;\n  \n//     if (!callback) {\n//       callback = (x, y) => {\n//         if (x < y) return - 1;\n//         return 1;\n//       };\n//     }\n  \n//     let pivot = array[0];\n//     let left = array.slice(1).filter((el) => callback(el, pivot) === -1);\n//     let right = array.slice(1).filter((el) => callback(el, pivot) !== -1);\n//     left = quickSort(left, callback);\n//     right = quickSort(right, callback);\n  \n//     return left.concat([pivot]).concat(right);\n// };\n\n// // Write a recursive function, `binarySearch(sortedArray, target)`, that returns\n// // the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use\n// // the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods \n// // in your implementation.\n// //\n// // Here's a quick summary of the binary search algorithm:\n// //\n// // Start by looking at the middle item of the array. If it matches the target,\n// // return its index. Otherwise, recursively search either the left or the right\n// // half of the array until the target is found or the base case (empty array) is\n// // reached.\n\n// function binarySearch(sortedArray, target) {\n//     if (sortedArray.length === 0) return -1\n\n//     let midIdx = Math.floor(sortedArray.length / 2) \n\n//     if (sortedArray[midIdx] > target) {\n//         return binarySearch(sortedArray.slice(0, midIdx), target) \n//     } else if (sortedArray[midIdx] === target) {\n//         return midIdx\n//     } else {\n//         let result = binarySearch(sortedArray.slice(midIdx + 1), target)\n//         return (result === -1) ? -1 : result + midIdx + 1\n//     }\n// }\n\n// Array.prototype.binarySearch = function(target) {\n//     if (this.length === 0) return -1\n\n//     let midIdx = Math.floor(this.length / 2) \n\n//     if (this[midIdx] > target) {\n//         return this.slice(0, midIdx).binarySearch(target)\n//     } else if (this[midIdx] === target) {\n//         return midIdx\n//     } else {\n//         let result = this.slice(midIdx + 1).binarySearch(target)\n//         return (result === -1) ? -1 : result + midIdx + 1\n//     }\n// }\n\n\n// // Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.\n// // It should take an optional callback that compares two elements, returning\n// // -1 if the first element should appear before the second, 0 if they are\n// // equal, and 1 if the first element should appear after the second. Do NOT call\n// // the built-in Array.prototype.sort method in your implementation. Also, do NOT\n// // modify the original array.\n// //\n// // Here's a quick summary of the bubble sort algorithm:\n// //\n// // Iterate over the elements of the array. If the current element is unsorted\n// // with respect to the next element, swap them. If any swaps are made before\n// // reaching the end of the array, repeat the process. Otherwise, return the\n// // sorted array.\n// let defaultCallback = (num1, num2) => {\n//     if (num1 < num2) {\n//       return -1;\n//     } else if (num1 === num2) {\n//       return 0;\n//     } else {\n//       return 1;\n//     }\n// };\n  \n// Array.prototype.bubbleSort = function (callback) {\n//     if (typeof callback !== \"function\") {\n//       callback = defaultCallback;\n//     }\n  \n//     let resultArr = this.slice();\n//     let sorted = false;\n//     while (!sorted) {\n//       sorted = true;\n//       for (let i = 1, n = resultArr.length; i < n; i++) {\n//         if (callback(resultArr[i - 1], resultArr[i]) === 1) {\n//           sorted = false;\n//           let swap = resultArr[i - 1];\n//           resultArr[i - 1] = resultArr[i];\n//           resultArr[i] = swap;\n//         }\n//       }\n//     }\n//     return resultArr;\n// };\n\n// let defaultCallback = (num1, num2) => {\n//     if (num1 < num2) {\n//       return -1;\n//     } else if (num1 === num2) {\n//       return 0;\n//     } else {\n//       return 1;\n//     }\n// };\n  \n// function bubbleSort(array, callback) {\n//     if (typeof callback !== \"function\") {\n//       callback = defaultCallback;\n//     }\n  \n//     let resultArr = array.slice();\n//     let sorted = false;\n//     while (!sorted) {\n//       sorted = true;\n//       for (let i = 1; i < resultArr.length; i++) {\n//         if (callback(resultArr[i - 1], resultArr[i]) === 1) {\n//           sorted = false;\n//           let swap = resultArr[i - 1];\n//           resultArr[i - 1] = resultArr[i];\n//           resultArr[i] = swap;\n//         }\n//       }\n//     }\n//     return resultArr;\n// };\n\n// // Write an `Array.prototype.mergeSort` method that merge sorts an array. It\n// // should take an optional callback that compares two elements, returning -1 if \n// // the first element should appear before the second, 0 if they are equal, and 1 \n// // if the first element should appear after the second. Define and use a helper \n// // method, `merge(left, right, comparator)`, to merge the halves. \n// //\n// // **IMPORTANT: Make sure to use a function declaration (`function merge`) as\n// // opposed to a function expression (`const merge = function`) for `merge`. Do\n// // NOT use the built-in `Array.prototype.sort` method in your implementation.**\n// //\n// // Here's a summary of the merge sort algorithm:\n// //\n// // Split the array into left and right halves, then merge sort them recursively\n// // until a base case is reached. Use a helper method, merge, to combine the\n// // halves in sorted order, and return the merged array.\n\n// Array.prototype.mergeSort = function (callback) {\n//     if (this.length <= 1) return this;\n  \n//     if (!callback) callback = (left, right) => {\n//       return left < right ? -1 : left > right ? 1 : 0;\n//     };\n  \n//     const midpoint = Math.floor(this.length / 2);\n//     const sortedLeft = this.slice(0, midpoint).mergeSort(callback);\n//     const sortedRight = this.slice(midpoint).mergeSort(callback);\n//     return merge(sortedLeft, sortedRight, callback);\n// };\n  \n// function merge(left, right, comparator) {\n//     let merged = [];\n  \n//     while (left.length && right.length) {\n//       switch (comparator(left[0], right[0])) {\n//         case -1:\n//           merged.push(left.shift());\n//           break;\n//         case 0:\n//           merged.push(left.shift());\n//           break;\n//         case 1:\n//           merged.push(right.shift());\n//           break;\n//       }\n//     }\n  \n//     merged = merged.concat(left, right);\n//     return merged;\n// }\n\n// function mergeSort(array, callback) {\n//     if (array.length <= 1) return array;\n  \n//     if (!callback) callback = (left, right) => {\n//       return left < right ? -1 : left > right ? 1 : 0;\n//     };\n  \n//     const midpoint = Math.floor(array.length / 2);\n//     const sortedLeft = mergeSort(array.slice(0, midpoint), callback);\n//     const sortedRight = mergeSort(array.slice(midpoint), callback);\n//     return merge(sortedLeft, sortedRight, callback);\n// };\n  \n// function merge(left, right, comparator) {\n//     let merged = [];\n  \n//     while (left.length && right.length) {\n//       switch (comparator(left[0], right[0])) {\n//         case -1:\n//           merged.push(left.shift());\n//           break;\n//         case 0:\n//           merged.push(left.shift());\n//           break;\n//         case 1:\n//           merged.push(right.shift());\n//           break;\n//       }\n//     }\n  \n//     merged = merged.concat(left, right);\n//     return merged;\n// }\n\n//# sourceURL=webpack://day1/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 500;\nconst DIM_Y = 500;\nconst NUM_ASTEROIDS = 20;\n\nfunction Game() {\n  this.asteroids = []\n  this.addAsteroids();\n}\n\n\nGame.prototype.addAsteroids = function () {\n  for (let i = 0; i <= 20; i++) {\n    let a = new Asteroid(this.randomPosition())\n    this.asteroids.push(a);\n  }\n}\n\nGame.prototype.randomPosition = function () {\n  let arr = []\n  let min = 0;\n  let max = 500;\n  arr.push(Math.floor(Math.random() * (max - min + 1)) + min);\n  arr.push(Math.floor(Math.random() * (max - min + 1)) + min);\n  return arr;\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, DIM_X, DIM_Y);\n  this.asteroids.forEach(a => {\n    a.draw(ctx);\n  })\n}\n\nGame.prototype.moveObjects = function () {\n  this.asteroids.forEach(a => {\n    a.pos = [a.pos[0] + 1, a.pos[1] + 1]\n  })\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://day1/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n  \n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    const canvasEl = document.getElementById(\"game-canvas\");\n  \n    const ctx = canvasEl.getContext(\"2d\");\n\n    window.ctx = ctx;\n\n    let game = new Game();\n    window.game = game;\n    // mo.draw(ctx)\n    window.MovingObject = MovingObject;\n\n    window.Asteroid = Asteroid;\n\n});\n\n\n//# sourceURL=webpack://day1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n  this.pos = obj['pos'];\n  this.vel = obj['vel'];\n  this.radius = obj['radius'];\n  this.color = obj['color'];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\n  ctx.lineWidth = 5;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://day1/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate(){}\n        Surrogate.prototype = parentClass.prototype\n        childClass.prototype = new Surrogate()\n        childClass.prototype.constructor = childClass\n    }\n};\n  \nmodule.exports = Util;\n\n//# sourceURL=webpack://day1/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;