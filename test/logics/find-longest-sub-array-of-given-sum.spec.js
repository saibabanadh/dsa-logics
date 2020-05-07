const findLongestSubArrayOfSum = require('../../index').Logics.findLongestSubArrayOfSum;
const assert = require('assert');

describe('Find Longest Sub Array Of Given Sum', () => {
    it('raises an error if the input is not proper', ()=>{
        assert.throws(() => {
            findLongestSubArrayOfSum(null, 10);
            findLongestSubArrayOfSum([10,20], null);
        });
    });

    it('returns the success scenarios', ()=>{
        const inputs = [
            { arr:[1,2,3,4,5,6,7,8,9], sum:15, expected:[ 1,2, 3, 4, 5] },
            { arr:[1,2,3,1,4,5,0,0,0,6,7,8,9], sum:15, expected:[ 2, 3, 1, 4, 5, 0, 0, 0 ] },
            { arr:[2,1], sum: 3, expected:[2,1] },
            { arr:[10,21,2,13], sum:12, expected:[]},
            { arr:[100,200,231,123], sum:300, expected:[100,200] }
        ];
        for(let each of inputs){
            let res = findLongestSubArrayOfSum(each.arr, each.sum);
            assert.deepEqual(res, each.expected);
        }
    });
});