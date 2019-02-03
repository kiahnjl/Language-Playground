#include <stdio.h>

int parseInt(char * str) {
    char * end = NULL;
    int res = strtol(str, &end, 10);
    return (*end == '\0' || *end == '\n') ? res : 0;
}