
const mergeSort = (arr) => {
    if(arr === null || typeof(arr) !== 'object'){
        throw new Error("Invalid input");
    }
    if(arr.length <= 1 ) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,arr.length);

    mergeSort(left);
    mergeSort(right);

    let i=0;
    let j=0;
    let k=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            arr[k] = left[i];
            i++;
            k++;
        }else{
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    while(i < left.length){
        arr[k] = left[i];
        i++;
        k++;
    }
    while(j < right.length){
        arr[k] = right[j];
        j++;
        k++;
    }

    return arr;
}

module.exports = mergeSort;