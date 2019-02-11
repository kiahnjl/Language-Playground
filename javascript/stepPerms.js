
function stepPerms(n) {
    let base = {
        1: 1,
        2: 2,
        3: 4,
        4: 7
    };
    
    if(n < 0) {
        return 0;
    } else if(base[n]) {
        return base[n];
    } else {
        return stepPerms(n - 3) + stepPerms(n - 2) + stepPerms(n - 1);
    }
}

for(let i = 0; i < 36; i++) {
    let beforeTs = Date.now();
    let count = stepPerms(i);
    let elapsedSec = (Date.now() - beforeTs) / 1000;
    console.log(i, count, `Took: ${elapsedSec}s`);
}