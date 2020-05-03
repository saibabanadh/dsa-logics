/**
 * Find the Sum of two elements in two arrays equals to given sum
 * hint : sum = arr1[i] + arr2[i]
 */


const findSumInTwo = (a1,a2,sum) => {
    if(!a1 || !a2 || !sum){
        throw new Error("Invalid values");
    }
    let comps = new Set();
    for(let i=0; i<a1.length;i++) {
        comps.add(sum - a1[i]);
    }
    for(let j=0;j<a2.length;j++) {
        if(comps.has(a2[j])){
            return true;
        }
    }
    return false;
}

module.exports = findSumInTwo;