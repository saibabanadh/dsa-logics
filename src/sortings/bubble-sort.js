
const bubbleSort = (arr) => {
    if(arr === null || typeof(arr) !== 'object'){
        throw new Error("Invalid input");
    }
    if(arr.length === 0 ) return [];

    for(let i=arr.length-1; i>0; i--){
        for(let j=0; j < i; j++){
            if( arr[i] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

module.exports = bubbleSort;