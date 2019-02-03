#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include "parseInt.c"

int main() {
    printf("Should parse one digit: ");
    assert(parseInt("1") == 1);
    printf("passed!\n");
    
    printf("Should parse two digits: ");
    assert(parseInt("99") == 99);
    printf("passed!\n");
    
    printf("Should parse a negative number: ");
    assert(parseInt("-99") == -99);
    printf("passed!\n");
    
    printf("Should return 0 when NaN: ");
    assert(parseInt("A") == 0);
    printf("passed!\n");
    
    printf("Should return 0 when an empty string: ");
    assert(parseInt("") == 0);
    printf("passed!\n");
    
    printf("Should handle a newline after input: ");
    assert(parseInt("10\n") == 10);
    printf("passed!\n");
    
    printf("Should not handle overflow: ");
    assert(parseInt("2147483648") == -2147483648);
    printf("passed!\n");
    
    printf("All tests passed!\n");
    return EXIT_SUCCESS;
}