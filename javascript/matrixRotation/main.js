'use strict';

/*
* Disclaimer:
* IO code and problem is from https://www.hackerrank.com/challenges/matrix-rotation-algo/problem
* I implemented the matrixRotation function
* */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the matrixRotation function below.
function matrixRotation(matrix, r) {
    let row = 0, col = 0;
    let endRow = matrix.length - 1, endCol = matrix[0].length - 1;
    let newMatrix = [], iterCount = 0;

    // 1) transform the input to an easy form the rotate
    while (row < endRow && col < endCol) {
        newMatrix[iterCount] = [];

        // go down the left column
        for(let i = row; i <= endRow; i++) {
            newMatrix[iterCount].push(matrix[i][col]);
        }

        // go across the bottom row
        // already added the bottom left entry
        for(let i = (col + 1); i <= endCol; i++) {
            newMatrix[iterCount].push(matrix[endRow][i]);
        }

        // go up the right column
        // already added the bottom right entry
        for(let i = (endRow - 1); i >= row; i--) {
            newMatrix[iterCount].push(matrix[i][endCol]);
        }

        // go back across the top row
        // already added the top right and left entries
        for(let i = (endCol - 1); i >= (col + 1); i--) {
            newMatrix[iterCount].push(matrix[row][i]);
        }

        iterCount++;
        row++;
        col++;
        endRow--;
        endCol--;
    }


    for(let i = 0; i < newMatrix.length; i++) {
        console.log(newMatrix[i]);
    }

    // 2) do the rotation

    

    // 3) print the result
}

function main() {
    const mnr = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(mnr[0], 10);

    const n = parseInt(mnr[1], 10);

    const r = parseInt(mnr[2], 10);

    let matrix = Array(m);

    for (let i = 0; i < m; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    matrixRotation(matrix, r);
}
