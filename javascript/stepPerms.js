
let cache = {};

function stepPerms(n) {
    if(cache[n]) {
        return cache[n];
    }
    
    if(n < 0) {
        return 0;
    } else if(n === 0) {
        return 1;
    } else {
        cache[n] = stepPerms(n - 3) + stepPerms(n - 2) + stepPerms(n - 1);
        return cache[n];
    }
}

for(let i = 0; i < 36; i++) {
    let beforeTs = Date.now();
    let count = stepPerms(i);
    let elapsedSec = (Date.now() - beforeTs) / 1000;
    console.log(i, count, `Took: ${elapsedSec}s`);
}