const allArrayCombos = require('./main');
// Test generate all different array permutations

function factorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Visual test
console.log(allArrayCombos(1));
console.log(allArrayCombos(2));
console.log(allArrayCombos(3));
console.log(allArrayCombos(4));

// Test up to 10 (speed and count)
for(let i = 1; i <= 10; i++) {
    console.log(
        `Test ${i}: Should be ${factorial(i)} different combinations`,
        allArrayCombos(i).length === factorial(i)
    );
}