const hammingDistance = require('../../index').Logics.hammingDistance;
const assert = require('assert');

describe('Hamming Distance', () => {
  it('raises an error if the inputs are not equal lengths', () => {
    assert.throws(() => {
      hammingDistance('saibabanadh', '1234');
    });
  });

  it('returns the correct the correct distances', () => {
    const inputs = [
      {a: 'saibaba', b: 'sanadba', expected: 3},
      {a: 'karthik', b: 'kirstik', expected: 3},
      {a: '1011101', b: '1001001', expected: 2},
      {a: '2173896', b: '2233796', expected: 3},
      {a: '1111111111', b: '0000000000', expected: 10},
      {a: '', b: '', expected: 0},
      {a: 'saibabanadh', b: 'saibabanadh', expected: 0},
    ];

    inputs.forEach(val => {
      assert.equal(hammingDistance(val.a, val.b), val.expected);
    });
  });
});
