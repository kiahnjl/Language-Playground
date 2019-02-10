// Starting with an array of zeros apply the queries
// where each query has a start and end index and a value to add between those
// (inclusive)

function arrayManipulation(n, queries) {
    let valueChanges = new Array(n);

    queries.forEach(function (q) {
        let applyAtIndex = q[0] - 1;
        let stopAtIndex = q[1]; // because queries are inclusive
        let value = q[2];
        if (valueChanges[applyAtIndex] === undefined) {
            valueChanges[applyAtIndex] = 0;
        }
        if (valueChanges[stopAtIndex] === undefined) {
            valueChanges[stopAtIndex] = 0;
        }
        valueChanges[applyAtIndex] += value;
        valueChanges[stopAtIndex] -= value;
    });

    let max = 0;
    let acc = 0;
    
    for (let i = 0; i < n; i++) {
        if (valueChanges[i] !== undefined) {
            acc += valueChanges[i];
        }
        if (acc > max) {
            max = acc;
        }
    }

    return max;
}

arrayManipulation(10, [
    [1,5,3],
    [4,8,7],
    [6,9,1]
]);