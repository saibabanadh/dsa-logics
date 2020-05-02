const quickSort = require('../../index').Sortings.QuickSort;
const assert = require('assert');

describe('Quick Sort', () => {
    it('returns error if not an array', ()=> {
        assert.throws(()=>{
            quickSort();
        });
    });
    it('return empty for empty array', ()=> {
        assert.equal(quickSort([]).length, 0);
    });
    it('success returns', ()=> {
        assert.deepEqual(quickSort([3]), [3]);
        assert.deepEqual(quickSort([3,6,1,7,2]), [1,2,3,6,7]);
        assert.deepEqual(quickSort([13,62,11,73,12]), [11,12,13,62,73]);
        assert.deepEqual(quickSort([10,-20,31,-5,2]), [-20,-5,2,10,31]);
    });
});