`
Find freq of chars in string
ex: "GeeksGeeks"
out :(g:2,k:2,s:2,e:4) 2 is repeated 3 times

O(N) + O(N) ~= O(N)
`

const checkCharFreq = (str) => {
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
}

module.exports = checkCharFreq;
