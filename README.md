# DSA Logics
Data Structure and Algorithms Logics for NodeJS

## Available Methods

* DataStructures
    - LinkedList
    - BinarySearchTree
* Strings
    - HammingDistance
    - LavenshteinDistance
* Sortings
    - BubbleSort
    - MergeSort
    - QuickSort
* Logics
    - CharFreq
    - NthFibonocci
    - FindSumInTwo
    - FindLongestSubArrayOfSum

## Installation

To install the algorithms for use in your project run:

`yarn add dsa-logics`

or if you don't have Yarn installed, run:

`npm i dsa-logics`

Once you've installed the library, you can start using it in your project like this:

**Using Linked List**

```js

const { DataStructures } = require('dsa-logics');
let linkedlist = new DataStructures.LinkedList();

linkedlist.help();  // will print list of methods

console.log(linkedlist.isEmpty()) // true

linkedlist.add(10);
linkedlist.add(20,1);

console.log(linkedlist.length) // 2

```
```js

const { DataStructures } = require('dsa-logics');
let BinarySearchTree = new DataStructures.LinkedList();

let bst = new BinarySearchTree();
bst.insert(30); // insert one element
bst.insert(21);
bst.insert(42);
console.log(bst.print()); // will print tree
//   _30   
//  /   \  
// 21    42


bst.bulkInsert([30,21,42,14,25,34,12,54,32,28]); // insert array of elements at a time
console.log(bst.print()); // will print tree
//         _______30______      
//        /               \     
//      _21               _42   
//     /   \             /   \  
//   _14    25         _34    54
//  /         \       /         
// 12          28    32         

bst.remove(42); // remove element
bst.remove(21); // remove element
console.log(bst.print()); // will print tree

//         ____30______   
//        /            \  
//      _25            _54
//     /   \          /   
//   _14    28      _34   
//  /              /      
// 12             32     

bst.search(28); // returns true
bst.search(18); // returns false

```

**Using Algorithms**

```js

const { Algorithms } = require('dsa-logics');

const s1 = Algorithms.bubbleSort([32,54,12,7,23]);
const s2 = Algorithms.mergeSort([32,54,12,7,23]);
const s3 = Algorithms.quickSort([32,54,12,7,23]);

console.log("Bubble Sort:", s1) // Bubble Sort: [ 7, 12, 23, 32, 54 ]
console.log("Merge Sort :", s2) // Merge Sort : [ 7, 12, 23, 32, 54 ]
console.log("Quick Sort :", s3) // Quick Sort : [ 7, 12, 23, 32, 54 ]

```

**Using Logics**

```js

const { Logics } = require('dsa-logics');

const d1 = Logics.hammingDistance("saibabanadh","saibabanath");
const d2 = Logics.lavenshteinDistance("000000","111111");

console.log("Hamming Distance:", d1) // Hamming Distance: 1
console.log("Lavenshtein Distance:", d2) // Lavenshtein Distance: 6

```

```js

const { Logics } = require('dsa-logics');

const result1 = Logics.charFreq("GeeksGeeks");
const result2 = Logics.charFreq("abbacbddbddee");

console.log("Result1:", result1) 
    // { 
    //     charCounts: { g: 2, e: 4, k: 2, s: 2 },
    //     highFreqChars: [ 'e' ],
    //     frequency: 4,
    //     countFreq: { '2': 3, '4': 1 },
    //     mostRepeatedFreq: [ 2 ],
    //     repeatedCount: 3 
    // }
console.log("Result2:", result2)
    // { 
    //     charCounts: { a: 2, b: 4, c: 1, d: 3, e: 2 },
    //     highFreqChars: [ 'b', 'd ],
    //     frequency: 4,
    //     countFreq: { '1': 1, '2': 2, '4': 2 },
    //     mostRepeatedFreq: [ 4, 2 ],
    //     repeatedCount: 2 
    // }

```

```js

const { Logics } = require('dsa-logics');

const result1 = Logics.nthFibonocci(7);
const result2 = Logics.nthFibonocci(11);
const result3 = Logics.nthFibonocci(33);

console.log("Result1:", result1); // 13
console.log("Result2:", result2); // 89
console.log("Result3:", result3); // 3524578
    

```

```js

const { Logics } = require('dsa-logics');

const isSumExists1 = Logics.findSumInTwo([1,2,3,4,5,6,7,8,9], [2,3,4,5], 10);
console.log("isSumExists1:", isSumExists1); // true

const isSumExists2 = Logics.findSumInTwo([2,1], [4,2], 10);
console.log("isSumExists2:", isSumExists2); // false

```

```js

const { Logics } = require('dsa-logics');

// Ex: Logics.findLongestSubArrayOfSum(yourArray, desiredSum);

const longSubArr1 = Logics.findLongestSubArrayOfSum([1,2,3,4,5,6,7,8,9], 15);
console.log("longSubArr1:", longSubArr1); // [ 1,2, 3, 4, 5]

const longSubArr2 = Logics.findLongestSubArrayOfSum([1,2,3,1,4,5,0,0,0,6,7,8,9], 15);
console.log("longSubArr2:", longSubArr2); // [ 2, 3, 1, 4, 5, 0, 0, 0 ]

const longSubArr3 = Logics.findLongestSubArrayOfSum([10,21,2,13], 12);
console.log("longSubArr3:", longSubArr3); // []

```

```js

const { Logics } = require('dsa-logics');

const result1 = Logics.encodeChars('aaabbcddee');
const result2 = Logics.decodeChars('3a2b1c2d2e);

console.log("Result1:", result1); // 3a2b1c2d2e
console.log("Result2:", result2); // aaabbcddee
    

```