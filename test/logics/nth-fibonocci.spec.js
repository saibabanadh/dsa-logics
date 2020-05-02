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
            { value:2, expected:2 },
            { value:5, expected:8 },
            { value:10, expected:89 },
            { value:12, expected:233 },
            { value:32, expected:3524578 },
            { value:45, expected:1836311903 }
        ];
        for(let each of inputs){
            assert.equal(nthFibonocci(each.value), each.expected);
        }
    });
});