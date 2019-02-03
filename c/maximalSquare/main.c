#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <readline/readline.h>
#include <readline/history.h>
#include "maximalSquare.h"

// Goal: Find the largest square of 1s
// Input: A 2D array of 0s or 1s
// Output: The size of the largest sqaure of 1s

// todo
// Improve time complexity from O(n^2)
// Error checking in all functions
// Test cases

int getValidGridSize();
int * createGrid(int numberOfCells);
void destroyGrid(int * grid);
int * getValidGrid(int size);

int main(int argc, char * argv[]) {
    int size = getValidGridSize();
    int * grid = getValidGrid(size);
    
    // int sqaureSize = maximalSquare(grid, size, size);
    // printf("The max size is: %d\n", sqaureSize);
    
    destroyGrid(grid);
    
    return EXIT_SUCCESS;
}

int getValidGridSize() {
    printf("Enter the size of the grid (the number of rows or cols): ");
    
    int size;
    int chars = scanf("%d", &size);
    
    if(chars < 0) {
        printf("\nCould not read a number\n");
        exit(1);
    } else if(size <= 0) {
        printf("Grid size must be greater than 0\n");
        exit(1);
    } else {
        return size;
    }
}

int * createGrid(int numberOfCells) {
    int * grid = malloc(numberOfCells * sizeof(int));
    
    if(grid == NULL) {
        fprintf(stderr, "Grid memory allocation failed\n");
        exit(1);
    } else {
        return grid;
    }
}

void destroyGrid(int * grid) {
    free(grid);
    grid = NULL;
}

int * getValidGrid(int size) {
    int numberOfCells = size * size;
    int * grid = createGrid(numberOfCells);
    
    printf("Enter the grid (each row on a new line, space separated integers):\n");
    
    return grid;
}
