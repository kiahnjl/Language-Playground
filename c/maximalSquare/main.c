#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "../io/io.h"
#include "../math/math.h"
#include "maximalSquare.h"

// Goal: Find the largest square of 1s
// Input: A 2D array of 0s or 1s
// Output: The size of the largest sqaure of 1s

// todo
// Improve time complexity from O(n^2)
// Error checking in all functions
// Test cases
// Cleanup abstractions - do they make sense?

#define MIN_GRID_SIZE 1
#define MAX_GRID_SIZE 100

int getValidGridSize();
int * createGrid(int numberOfCells);
void destroyGrid(int * grid);
int * getValidGrid(int size);
void printGrid(int * grid, int size);

int main(int argc, char * argv[]) {
    int size = getValidGridSize();
    int * grid = getValidGrid(size);
    
    int sqaureSize = maximalSquare(grid, size, size);
    printf("The max size is: %d\n", sqaureSize);
    
    destroyGrid(grid);
    
    return EXIT_SUCCESS;
}

int getValidGridSize() {
    printf("Enter the size of the grid (the number of rows or cols): ");
    
    char * line = readLine(stdin);
    int size = parseInt(line);
    free(line);
    
    if(size < MIN_GRID_SIZE || size > MAX_GRID_SIZE) {
        printf("Grid size should be >= %d and <= %d\n", MIN_GRID_SIZE, MAX_GRID_SIZE);
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
    
    for(int i = 0; i < size; i++) {
        char * line = readLine(stdin);
        
        for(int j = 0; j < size; j++) {
            char * temp = malloc(sizeof(char));
            *temp = line[j * 2]; // Skip the whitespace
            
            int cell = parseInt(temp); 
            *(grid + (i * size) + j) = cell;
            
            free(temp);
        }
        
        free(line);
    }
    
    return grid;
}

void printGrid(int * grid, int size) {
    printf("\n");
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < size; j++) {
            printf("%d ", *(grid + (i * size) + j));
        }
        printf("\n");
    }
}
