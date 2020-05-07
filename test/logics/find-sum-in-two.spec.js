const  findSumInTwo = require('../../index').Logics.findSumInTwo;
const assert = require('assert');

describe('Find Sum in Two Arrays', () => {
    it('raises an error if the input is not proper', ()=>{
        assert.throws(() => {
            findSumInTwo(null, null, 10);
            findSumInTwo([10,20], null, 10);
            findSumInTwo([10,20], [10,10], null);
        });
    });

    it('returns the success scenarios', ()=>{
        const inputs = [
            { a1:[1,2,3,4,5,6,7,8,9],a2:[2,3,4,5], sum:10, expected:true },
            { a1:[2,1],a2:[4,2], sum:10, expected:false },
            { a1:[10,21,2,13],a2:[41,23,1,4], sum:12, expected:false},
            { a1:[100,200,231,123],a2:[2,3,12,54,24,67,21], sum:167, expected:true }
        ];
        for(let each of inputs){
            let res = findSumInTwo(each.a1, each.a2, each.sum);
            assert.equal(res, each.expected);
        }
    });
});