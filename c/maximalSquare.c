#import <stdio.h>

// Goal: Find the largest square of 1s
// Input: A 2D array of 0s or 1s
// Output: The size of the largest sqaure of 1s

// todo
// Improve time complexity from O(n^2)
// Get to read from stdin
// Allow any number of rows or columns
// Get int * grid[] type to work?

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1
#define TRUE 0
#define FALSE 1
#define ROWS 5
#define COLS 5

int maximalSquare(int * grid, int rows, int cols);
int testCell(int c);

int main() {
    int grid[ROWS][COLS] = {
        {1, 1, 1, 1, 0},
        {0, 1, 1, 1, 1},
        {1, 1, 1, 1, 1},
        {1, 0, 0, 1, 0},
        {1, 0, 0, 1, 0}
    };
    int * gridP = &grid[0][0];
    
    int size = maximalSquare(gridP, ROWS, COLS);
    printf("The max size is: %d\n", size);
    
    return EXIT_SUCCESS;
}

int maximalSquare(int * grid, int rows, int cols) {
    int maxSize = 0;
    int size = 0;
    
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            int e = *(grid + i * cols + j);
            if(testCell(e)) {
                size = 1;
                if(size > maxSize) {
                    maxSize = size;
                }
            }
        }
    }
    
    return size;
}

int testCell(int c) {
    if(c == 1) {
        return TRUE;
    } else {
        return FALSE;
    }
}
