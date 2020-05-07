const lavenshteinDistance = require('../../index').Logics.lavenshteinDistance;
const assert = require('assert');

describe('Levenshtein Distance', () => {
  it('raise error if given strings are null', () => {
    assert.throws(() => {
      lavenshteinDistance(null, null);
    });
  });

  it('calculates the minimal edit distance between two words', () => {
    assert.equal(lavenshteinDistance('', ''), 0);
    assert.equal(lavenshteinDistance('a', ''), 1);
    assert.equal(lavenshteinDistance('', 'a'), 1);
    // Should just add I to the beginning
    assert.equal(lavenshteinDistance('ISLANDER', 'SLANDER'), 1);
    assert.equal(lavenshteinDistance('SAIBABA', 'SAIBAB'), 1);
    // Needs to substitute M by K, T by M and add an A to the end
    assert.equal(lavenshteinDistance('MART', 'KARMA'), 3);
    // Needs to substitute K by S, E by I and add G to the end
    assert.equal(lavenshteinDistance('KITTEN', 'SITTING'), 3);
    // Needs to substitute the first 5 chars: INTEN by EXECU
    assert.equal(lavenshteinDistance('INTENTION', 'EXECUTION'), 5);
  });
});
