const charFrequency = require('../../index').Logics.CharFreq;
const assert = require('assert');

describe('Character Frequency', () => {
    it('raises an error if the input is null', () => {
        assert.throws(() => {
            charFrequency();
        });
    });

    it('return error if the input is empty', () => {
        assert.deepEqual(charFrequency(''), {"error":"String is Empty.!"});
    });

    it('returns the success scenarios', () => {
        const inputs = [
            {str: 'GeeksGeeks', expected: {charCounts: { g: 2, e: 4, k: 2, s: 2 }}},
            {str: 'abbacbddbddee', expected: {charCounts: { a: 2, b: 4, c: 1, d: 4, e: 2 }}}
        ];
        inputs.forEach(val => {
            let {charCounts} = charFrequency(val.str);
            assert.deepEqual(charCounts, val.expected.charCounts);
        });
    });
});
