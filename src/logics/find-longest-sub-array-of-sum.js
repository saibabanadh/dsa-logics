/**
 * Find the longest sub array of array which should equal to given sum
 * hint : sum = arr1[i] + arr2[i]
 */
const findLongestSubArrayOfSum= (arr,gs) => {
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
}
module.exports = findLongestSubArrayOfSum;
