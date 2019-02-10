const allArrayCombos = require('./arrayCombinations/main');
// How many swaps to order the array?

function minimumSwaps(arr) {
    let numberOfSwaps = 0;
    let unorderedNumbers = {}; // number to index

    for (let i = 0; i < arr.length; i++) {
        // number is in the correct place
        if (arr[i] === (i + 1)) {
            continue;
        }

        // we have already passed the spot for this number
        if (arr[i] < (i + 1)) {
            let alreadyPassedNumber = arr[i];
            // move that number into this spot
            arr[i] = arr[alreadyPassedNumber - 1];
            // set that number to correct
            arr[alreadyPassedNumber - 1] = alreadyPassedNumber;
            numberOfSwaps++;
            // what about the number i just moved into this spot
            // it could be correct
            if (arr[i] === (i + 1)) {
                delete unorderedNumbers[i + 1];
                continue;
            } else {
                // its not correct, update its spot
                unorderedNumbers[arr[i]] = i;
            }
        }

        // we might know where the correct number is
        if (unorderedNumbers[i + 1] >= 0) {
            // move this number into that spot
            arr[unorderedNumbers[i + 1]] = arr[i];
            unorderedNumbers[arr[i]] = unorderedNumbers[i + 1];
            // move the correct number into this spot
            arr[i] = i + 1;
            delete unorderedNumbers[i + 1];
            numberOfSwaps++;
        } else {
            unorderedNumbers[arr[i]] = i;
        }
    }

    return numberOfSwaps;
}

// Test
// console.log(minimumSwaps([]));
// console.log(minimumSwaps([1]));
// console.log(minimumSwaps([1,2]));
// console.log(minimumSwaps([2,1]));
// console.log(minimumSwaps([1,3,5,2,4,6,7]));

// Generate some test cases
let cases = allArrayCombos(5);

for(let i = 0; i < cases.length; i++) {
    console.log(`Test ${i}: `);
    console.log(cases[i]);
    console.log(`Min swaps: ${minimumSwaps(cases[i])}\n`);
}
