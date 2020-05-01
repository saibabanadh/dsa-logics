/**
 *
 * Hamming distance between two strings of equal length is the number of
 * positions at which the corresponding symbols are different. 
 * 
 */
const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('Strings must be equal in length');
  }
  let dist = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      dist++;
    }
  }
  return dist;
};

module.exports = hammingDistance;