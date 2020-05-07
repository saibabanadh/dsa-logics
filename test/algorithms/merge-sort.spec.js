const mergeSort = require('../../index').Algorithms.mergeSort;
const assert = require('assert');

describe('Merge Sort', () => {
    it('returns error if not an array', ()=> {
        assert.throws(()=>{
            mergeSort();
        });
    });
    it('return empty for empty array', ()=> {
        assert.equal(mergeSort([]).length, 0);
    });
    it('success returns', ()=> {
        assert.deepEqual(mergeSort([3]), [3]);
        assert.deepEqual(mergeSort([3,6,1,7,2]), [1,2,3,6,7]);
        assert.deepEqual(mergeSort([13,62,11,73,12]), [11,12,13,62,73]);
        assert.deepEqual(mergeSort([10,-20,31,-5,2]), [-20,-5,2,10,31]);
    });
});