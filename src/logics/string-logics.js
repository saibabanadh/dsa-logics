/**
 *
 * Hamming distance between two strings of equal length is the number of
 * positions at which the corresponding symbols are different. 
 * 
 */
exports.hammingDistance = (a, b) => {
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

exports.levenshteinDistance = (a, b) => {
    if(a === null || b === null){
      throw new Error('Strings must be equal in length');
    }else{
      const editDistance = [];
      let i;
      let j;
    
      // Initialize the edit distance matrix. The first collumn contains
      // the values comparing the string a to an empty string b
      for (i = 0; i <= a.length; i++) {
        editDistance[i] = [];
        editDistance[i][0] = i;
      }
      
      // And the first line the values comparint the string b to an empty string a
      for (j = 0; j <= b.length; j++) {
        editDistance[0][j] = j;
      }
    
      for (i = 1; i <= a.length; i++) {
        for (j = 1; j <= b.length; j++) {
          // Finds the minimum cost for keeping the two strings equal
          editDistance[i][j] =
            Math.min(
              editDistance[i - 1][j - 1], // if we replace a[i] by b[j]
              editDistance[i - 1][j], // if we delete the char from a
              editDistance[i][j - 1] // if we add the char from b
            ) + (a[i - 1] === b[j - 1] ? 0 : 1);
        }
      }
      return editDistance[a.length][b.length];
    }
};

/**
 * Find freq of chars in string
    ex: "GeeksGeeks"
    out :(g:2,k:2,s:2,e:4) 2 is repeated 3 times
    O(N) + O(N) ~= O(N)
 */

exports.checkCharFreq = (str) => {
    if(str.length == 0){
        return {
            error : "String is Empty.!"
        }
    }
    const result = {};
    const charCounts = {};
    let highFreqChar = [];
    let frequency = 0;
    str = str.toLowerCase();
    for(let i=0; i<str.length; i++){
        if(!(str[i] in charCounts)){
            charCounts[str[i]] = 0;
        }
        charCounts[str[i]] += 1;
        if(charCounts[str[i]] > frequency ){
            frequency = charCounts[str[i]];
            highFreqChar = [str[i]];
        }else if(charCounts[str[i]] == frequency){
            highFreqChar.push(str[i]);
        }

    }
    result["charCounts"] = charCounts;
    result["highFreqChars"] = highFreqChar;
    result["frequency"] = frequency;

    const countFreq = {};
    let mostRepeatedFreq = [];
    let repeatedCount = 0;

    for(let each of Object.values(charCounts)){
        if(!(each in countFreq)){
            countFreq[each] = 0;
        }
        countFreq[each] += 1;
        if(countFreq[each] > repeatedCount){
            repeatedCount = countFreq[each];
            mostRepeatedFreq = [each];
        }else if(countFreq[each] == repeatedCount){
            mostRepeatedFreq.push(each);
        }
    }

    result["countFreq"] = countFreq;
    result["mostRepeatedFreq"] = mostRepeatedFreq;
    result["repeatedCount"] = repeatedCount;

    return result;
};


exports.encodeChars = (chars) => {
  if(!chars) throw new Error();
  if(chars.length == 0 ) return 'Invalid String';
  let prevChar = '0';
  let counter = 0;
  let encodedStr = '';
  chars = chars.replace(/ /g, '');
  chars = chars.split('');
  for(let i=0; i < chars.length; i++){
    if(chars[i] == prevChar){
      counter += 1;
    }else{
      if(prevChar == '0'){
        prevChar = chars[i];
        counter = 1;
      }else{
        encodedStr += counter.toString() + prevChar;
        prevChar = chars[i];
        counter = 1;
      }
    }
  }
  encodedStr += counter.toString() + prevChar;
  return encodedStr;
};

exports.decodeChars = (chars) => {
  if(!chars) throw new Error();
  if(chars.length == 0 ) return 'Invalid String';
  const digits = {'1':true,'2':true,'3':true,'4':true,'5':true,'6':true,'7':true,'8':true,'9':true};
  let counter = '';
  let decodedStr = '';
  chars = chars.replace(/ /g, '');
  chars = chars.split('');
  for(let i=0; i<chars.length;i++){
    if(chars[i] in digits){
      counter += chars[i];
    }else{
      decodedStr += (chars[i]).toString().repeat(parseInt(counter));
      counter = '';
    }
  }
  return decodedStr;
};




