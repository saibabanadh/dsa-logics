
const levenshteinDistance = (a, b) => {
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
  
module.exports = levenshteinDistance;
  