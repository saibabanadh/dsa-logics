/**
 * Return Fibonocci at given Index
 */

const nthFibonocci = (n) => {
    if(typeof(n) !== "number"){
        throw new Error("Invalid value of n");
    }
    if(n < 2 ){
        return n;
    }
    let prevprev = 0;
    let prev = 1;
    let current = prevprev + prev;
    for(let i=3; i <= n+1; i++){
        current = prevprev + prev;
        prevprev = prev;
        prev = current;
    }
    return current;
}

module.exports = nthFibonocci;