
const quickSort = (arr) => {
    if(arr === null || typeof(arr) !== 'object'){
        throw new Error("Invalid input");
    }
    if(arr.length <= 1 ) return arr;
    let mid = Math.floor(arr.length / 2);
    let lower = [];
    let pivot = arr[mid];
    let upper = [];
    for(let each of arr){
        if(each < pivot){
            lower.push(each);
        }else if(each > pivot){
            upper.push(each);
        }
    }
    return quickSort(lower).concat([pivot]).concat(quickSort(upper));
}

module.exports = quickSort;