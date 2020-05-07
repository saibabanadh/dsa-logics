const bubbleSort = require('../../index').Algorithms.bubbleSort;
const assert = require('assert');

describe('Bubble Sort', () => {
    it('returns error if not an array', ()=> {
        assert.throws(()=>{
            bubbleSort();
        });
    });
    it('return empty for empty array', ()=> {
        assert.equal(bubbleSort([]).length, 0);
    });
    it('success returns', ()=> {
        assert.deepEqual(bubbleSort([3]), [3]);
        assert.deepEqual(bubbleSort([3,6,1,7,2]), [1,2,3,6,7]);
        assert.deepEqual(bubbleSort([13,62,11,73,12]), [11,12,13,62,73]);
        assert.deepEqual(bubbleSort([10,-20,31,-5,2]), [-20,-5,2,10,31]);
    });
});