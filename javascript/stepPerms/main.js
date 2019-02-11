// Constraints: 1 <= n <= 36

function stepPerms(n, recent = [1, 2, 4]) {
    if(n <= 3) {
        return recent[n - 1];
    } else {
        return stepPerms(n - 1, [recent[1], recent[2], recent[0] + recent[1] + recent[2]]);
    }
}

for(let i = 0; i < 36; i++) {
    let beforeTs = Date.now();
    let count = stepPerms(i);
    let elapsedSec = (Date.now() - beforeTs) / 1000;
    console.log(i, count, `Took: ${elapsedSec}s`);
}