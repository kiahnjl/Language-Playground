#include <string.h>

#define TRUE 1
#define MAX_CHARS_IN_LINE 1024

// todo
// no bound on number of characters
// error checking

char * readLine(FILE * fp) {
    char * line = malloc(MAX_CHARS_IN_LINE * sizeof(char));
    if(line == NULL) {
        fprintf(stderr, "Read Line allocation failed\n");
        exit(1);
    }
    
    fgets(line, MAX_CHARS_IN_LINE, fp);
    
    int length = strlen(line);
    if(line[length - 1] == '\n') {
        line[length - 1] = '\0';
    }
    
    line = realloc(line, length * sizeof(char));
    
    return line;
}