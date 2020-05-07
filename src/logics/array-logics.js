/**
 * Find the longest sub array of array which should equal to given sum
 * hint : sum = arr1[i] + arr2[i]
 */
exports.findLongestSubArrayOfSum= (arr,gs) => {
    if(!arr || !gs){
        throw new Error("Invalid Inputs.")
    }
    let left = 0;
    let right = 0;
    let sum = 0;
    let p1 = 0;
    let p2 = 0;
    while(right < arr.length){
        sum = sum + arr[right];
        while(left < right && sum > gs){
            sum = sum - arr[left];
            left = left + 1;
        }
        if(sum == gs && (p2-p1) <= (right-left)){
            p1 = left;
            p2 = right + 1;
        }
        right = right + 1;
    }
    return arr.slice(p1,p2);
};

/**
 * Find the Sum of two elements in two arrays equals to given sum
 * hint : sum = arr1[i] + arr2[i]
 */
exports.findSumInTwo = (a1,a2,sum) => {
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
};

/**
 * Find first duplicate
 */
exports.findFirstDuplicate = (arr) => {

};

/**
 * Find max diff of array elements
 */
exports.maxDiffOfArrayElements = (arr) => {

};

/**
 * is Pair exists equal to given sum
 */
exports.isPairExists = (arr,sum) => {

};

/**
 * is Triplet exists equal to given sum
 */
exports.isTripletExists = (arr,sum) => {

};

/**
 * return Union of two arrays
 */
exports.unionArrays = (a1,a2) => {

};

/**
 * return Intersection of two arrays
 */
exports.intersectArrays = (arr1,arr2) => {

};