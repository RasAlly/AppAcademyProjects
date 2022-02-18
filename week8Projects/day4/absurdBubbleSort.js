const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  
}

function askIfGreaterThan(el1, el2, callback) {
  rl.question(`Is ${el1} greater than ${el2}? :`, input => {
    if (input === 'yes') {
      callback(true)
    } else if (input === 'no'){
      callback(false)
    }else{
      throw new Error ('not a valid answer.. choose yes or no');
    }
  })
}

askIfGreaterThan(6, 5,  userInput => console.log(`answer: ${userInput}`))