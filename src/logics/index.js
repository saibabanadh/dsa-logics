const arrayLogics = require('./array-logics');
const stringLogics = require('./string-logics');
const miscLogics = require('./misc');

// ARRAYS
exports.findSumInTwo = arrayLogics.findSumInTwo;
exports.findLongestSubArrayOfSum = arrayLogics.findLongestSubArrayOfSum;
exports.findFirstDuplicate = arrayLogics.findFirstDuplicate;
exports.maxDiffOfArrayElements = arrayLogics.maxDiffOfArrayElements;
exports.isPairExists = arrayLogics.isPairExists;
exports.isTripletExists = arrayLogics.isTripletExists;
exports.unionArrays = arrayLogics.unionArrays;
exports.intersectArrays = arrayLogics.intersectArrays;
exports.findMaxSumOfSubArray = arrayLogics.findMaxSumOfSubArray;

// STRINGS
exports.hammingDistance = stringLogics.hammingDistance;
exports.lavenshteinDistance = stringLogics.levenshteinDistance;
exports.charFreq = stringLogics.checkCharFreq;
exports.encodeChars = stringLogics.encodeChars;
exports.decodeChars = stringLogics.decodeChars;

// MISC
exports.nthFibonocci = miscLogics.nthFibonocci;
exports.balancedParanthesis = miscLogics.balancedParenthesis;