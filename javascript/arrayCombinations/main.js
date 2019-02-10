// Generate all different array permutations

function arrayOfSize(size) {
    let arr = new Array(size);
    
    for(let i = 0; i < size; i++) {
        arr[i] = i + 1;
    }
    
    return arr;
}

function remove(arr, i) {
    let start = arr.slice(0, i);
    let end = arr.slice(i + 1, arr.length);
    return start.concat(end);
}

function allArrayCombos(size) {
    function calc(pool) {
        if(pool.length === 1) {
            return [pool[0]];
        }
        
        let allRes = [];
        
        for(let i = 0; i < pool.length; i++) {
            let numb = pool[i];
            let res = calc(remove(pool, i));
            if(res[0] instanceof Array) {
                res.forEach(function(r) {
                    allRes.push([numb].concat(r));
                });
            } else {
                allRes.push([numb].concat(res));
            }
        }
        
        return allRes;
    }
    
    let arr = arrayOfSize(size);
    return calc(arr);
}

module.exports = allArrayCombos;