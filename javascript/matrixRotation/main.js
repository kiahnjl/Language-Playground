'use strict';

/*
* Disclaimer:
* IO code and problem is from https://www.hackerrank.com/challenges/matrix-rotation-algo/problem
* I implemented the matrixRotation function
* 
* Todo:
* Improve efficiency - better algorithm
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

    // 2) do the rotation
    for(let i = 0; i < newMatrix.length; i++) {
        let outer = newMatrix[i];
        let len = outer.length;
        let equivalentR = r % len;
        let temp = [];
        
        for(let j = 0; j < len; j++) {
            let nextIndex = (j + equivalentR) % len;
            temp[nextIndex] = outer[j];
        }
        
        newMatrix[i] = temp;
    }

    row = 0;
    col = 0;
    endRow = matrix.length - 1;
    endCol = matrix[0].length - 1;
    let finalMatrix = [];

    // 3) transform it back
   for(let i = 0; i < newMatrix.length; i++) {
       let curr = newMatrix[i];
       let currIndex = 0;
       
       // add the left column
       // after this all the rows will be added
       for(let j = row; j <= endRow; j++) {
           finalMatrix[j] = finalMatrix[j] || [];
           finalMatrix[j][col] = curr[currIndex];
           currIndex++;
       }

       // add the bottom row
       for(let j = (col + 1); j <= endCol; j++) {
           finalMatrix[endRow][j] = curr[currIndex];
           currIndex++;
       }

       // add the left column
       for(let j = (endRow - 1); j >= row; j--) {
           finalMatrix[j][endCol] = curr[currIndex];
           currIndex++;
       }

       // add the top row
       for(let j = (endCol - 1); j > col; j--) {
           finalMatrix[row][j] = curr[currIndex];
           currIndex++;
       }

       row++;
       col++;
       endRow--;
       endCol--;
   }
    
    for(let i = 0; i < finalMatrix.length; i++) {
        console.log(finalMatrix[i].reduce((r, e, i) => {
            let col = i === 0 ? e : (' ' + e);
            return r + col;
        }, ''));
    }
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
