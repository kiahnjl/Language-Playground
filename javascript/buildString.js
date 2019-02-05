/*
 * Complete the buildString function below.
 * a = price for adding a character
 * b = price for copying a substring
 * s = the string to be built
 *
 * return the minimum price
 */

/*
* Begin at the start of the string
* If it is cheaper to add an already existing substring, then do so
* Else add the next char
*
* Need to check if there was a better substring that could have been used
* */
function buildString(a, b, s) {
    /*
     * Write your code here.
     */
    let cost = 0;
    let nextChar = 0;
    let strLen = s.length;
    let built = []; // use an object instead?

    while(nextChar < strLen) {
        // check
        // todo efficiency
        
        let subStr = "";
        let subValid = true;
        let subChar = nextChar;
        
        while(subValid && subChar < strLen) {
            let nextSub = subStr + s[subChar];
            // todo efficiency
            subValid = built.join('').indexOf(nextSub) >= 0;
            if(subValid) {
                subStr = nextSub;
                subChar++;
            }
        }
        
        if(b < (a * subStr.length)) {
            // console.log('adding substr ' + subStr);
            cost += b;
            built.push(subStr);
            nextChar += subStr.length;
        } else {
            // console.log('adding char ' + s[nextChar]);
            cost += a;
            built.push(s[nextChar]);
            nextChar++;
        }
    }
    
    console.log(built);

    return cost;
}

function calcCost(a, b, s, temp, built) {


    // branch
    // calc cost if adding
    // calc cost if subbing
    // use lower cost
}

console.log(buildString(4, 5, "aabaacaba"));
console.log(buildString(8, 9, "bacbacacb"));
console.log(buildString(5, 10, "bacbacacb"));
console.log(buildString(10, 5, "bacbacacb"));
console.log(buildString(5, 15, "aaaaaaaaaa"));
/*
* For repeating chars we might need to check if adding one more
* will allow us to substring less times
* eg s = "aaaaaaaaaa", a = 5, b = 15
* (5 * a) + b = 5 * 5 + 15 = 40
*
* What's happening?
* I am taking the first substring I can find
* It's possible that adding a few more chars gives a better substring
*
* How to solve?
* 1) Add as a substring but go back and check it was the right choice?
* 2) A better algorithm -
*       - at each choice take both and make it recursive
* 3) Create a list to keep track how the string was built
*/