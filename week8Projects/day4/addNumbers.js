const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft,completionCallback){
    if (numsLeft > 0){
        rl.question('choose a number:', num =>{
            let input = parseInt(num);
            let newSum = sum + input
            console.log(`${newSum}`) 
            addNumbers(newSum, numsLeft-1, completionCallback)
        })
    } else if (numsLeft === 0){
        completionCallback(sum)
        rl.close();
    }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));