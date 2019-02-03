#include <stdio.h>
#include <stdlib.h>
#include "maximalSquare.h"

// Goal: Find the largest square of 1s
// Input: A 2D array of 0s or 1s
// Output: The size of the largest sqaure of 1s

// todo
// Improve time complexity from O(n^2)
// Read from stdin
// And allow any number of rows or columns
// Error checking all functions
// Test cases
// Get int * grid[] type to work?

int main(int argc, char * argv[]) {
    int grid[5][5] = {
        {1, 1, 1, 1, 1},
        {1, 1, 0, 1, 0},
        {1, 1, 0, 1, 1},
        {1, 1, 1, 1, 0},
        {1, 0, 0, 1, 0}
    };
    int * gridP = &grid[0][0];
    
    int size = maximalSquare(gridP, 5, 5);
    printf("The max size is: %d\n", size);
    
    return EXIT_SUCCESS;
}
