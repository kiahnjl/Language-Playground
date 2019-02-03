#include <stdio.h>
#include <stdlib.h>
#include "maximalSquare.h"

// Goal: Find the largest square of 1s
// Input: A 2D array of 0s or 1s
// Output: The size of the largest sqaure of 1s

// todo
// Improve time complexity from O(n^2)
// Error checking in all functions
// Test cases

int getValidGridSize();

int main(int argc, char * argv[]) {
    int gridSize = getValidGridSize();
    int * grid = malloc(gridSize * sizeof(int));
    
    if(grid == NULL) {
        fprintf(stderr, "grid memory allocation failed\n");
        exit(1);
    }
    
    // int sqaureSize = maximalSquare(grid, gridSize, gridSize);
    // printf("The max size is: %d\n", sqaureSize);
    
    free(grid);
    
    return EXIT_SUCCESS;
}

int getValidGridSize() {
    printf("Enter the size of the grid: ");
    
    int size;
    int chars = scanf("%d", &size);
    
    if(chars < 0) {
        printf("\nCould not read a number\n");
        exit(1);
    } else if(size <= 0) {
        printf("Grid size must be greater than 0\n");
        exit(1);
    } else if(size % 2 != 0) {
        printf("Grid size must be even\n");
        exit(1);
    } else {
        return size;
    }
}
