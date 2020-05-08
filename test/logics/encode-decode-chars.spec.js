const  encodeChars = require('../../index').Logics.encodeChars;
const  decodeChars = require('../../index').Logics.decodeChars;
const assert = require('assert');

describe('Encode & Decode Character String', () => {
    it('return invalid string if the input is empty or null', ()=>{
        let res1 = encodeChars('');
        let res2 = decodeChars('');

        assert.equal(res1, 'Invalid String');
        assert.equal(res2, 'Invalid String');
    });
    it('encodeChars - success scenarios', ()=>{
        const inputs = [
            { chars:'aabbccddee', expected:'2a2b2c2d2e' },
            { chars:'aaabccbbc', expected:'3a1b2c2b1c' }
        ];
        for(let each of inputs){
            let res = encodeChars(each.chars);
            assert.equal(res, each.expected);
        }
    });
    it('decodeChars - success scenarios', ()=>{
        const inputs = [
            { chars:'2a2b2c2d2e', expected:'aabbccddee' },
            { chars:'3a1b2c2b1c', expected:'aaabccbbc' }
        ];
        for(let each of inputs){
            let res = decodeChars(each.chars);
            assert.equal(res, each.expected);
        }
    });
});