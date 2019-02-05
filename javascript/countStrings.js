/*
* Input:
* - r: a string of the regular expression
* - l: a integer specifying the length of the matches
* */

let TYPE = {
    BASE: 'BASE',
    GROUP: 'GROUP',
    AND: 'AND',
    OR: 'OR',
    REPEAT: 'REPEAT'
};

function countStrings(r, l) {

}

function getType(char) {
    if(char === 'a' || char === 'b') {
        return 1;
    }


}

console.log(countStrings('((ab)|(ba))', 2));
console.log(countStrings('((a|b)*)', 5));
console.log(countStrings('((a*)(b(a*)))', 5));