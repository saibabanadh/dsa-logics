const nthFibonocci = require('../../index').Logics.NthFibonocci;
const assert = require('assert');

describe('Nth Fibonocci', () => {
    it('raises an error if the input is not number', ()=>{
        assert.throws(() => {
            nthFibonocci();
        });
    });

    it('returns the success scenarios', ()=>{
        const inputs = [
            { value:0, expected:0 },
            { value:1, expected:1 },
            { value:2, expected:1 },
            { value:7, expected:13 },
            { value:11, expected:89 },
            { value:13, expected:233 },
            { value:33, expected:3524578 },
            { value:46, expected:1836311903 }
        ];
        for(let each of inputs){
            assert.equal(nthFibonocci(each.value), each.expected);
        }
    });
});