#import <stdio.h>

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

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1
#define ROWS 5
#define COLS 5

int maximalSquare(int * grid, int rows, int cols);
int getArea(int * grid, int row, int col, int rows, int cols);
int testCell(int * grid, int row, int col, int rows, int cols);

int main() {
    int grid[ROWS][COLS] = {
        {1, 1, 1, 1, 1},
        {0, 1, 0, 1, 0},
        {0, 1, 0, 1, 1},
        {1, 1, 1, 1, 0},
        {1, 0, 0, 1, 0}
    };
    int * gridP = &grid[0][0];
    
    int size = maximalSquare(gridP, ROWS, COLS);
    printf("The max size is: %d\n", size);
    
    return EXIT_SUCCESS;
}

int maximalSquare(int * grid, int rows, int cols) {
    int maxSize = 0;
    
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            int size = getArea(grid, i, j, rows, cols);
            if(size > maxSize) {
                maxSize = size;
            }
        }
    }
    
    return maxSize;
}

int getArea(int * grid, int row, int col, int rows, int cols) {
    int isSqaure = testCell(grid, row, col, rows, cols);
    int size = isSqaure ? 1 : 0, currRow = row, currCol = col;
    
    while(isSqaure) {
        currRow++, currCol++;
        isSqaure = currRow < rows && currCol < cols;
        
        // Test all cells in the current row
        for(int c = col; (isSqaure && c <= currCol); c++) {
            isSqaure = testCell(grid, currRow, c, rows, cols);
        }
        
        // Test all cells in the current col
        for(int r = row; (isSqaure && r <= currRow); r++) {
            isSqaure = testCell(grid, r, currCol, rows, cols);
        }
        
        if(isSqaure) {
            size++;
        }
    }
    
    return size * size;
}

int testCell(int * grid, int row, int col, int rows, int cols) {
    int cell = *(grid + (row * cols) + col);
    return cell == 1;
}
