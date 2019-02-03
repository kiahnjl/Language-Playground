
int testCell(int * grid, int row, int col, int rows, int cols) {
    int cell = *(grid + (row * cols) + col);
    return cell == 1;
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
