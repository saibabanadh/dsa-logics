# DSA Logics
Data Structure and Algorithms Logics for NodeJS

## Available Methods

* DataStructures
    - LinkedList
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

linkedlist.help();  // will print below

`
-------------------------------------------------------------------
    help() - give you all actions available
    isEmpty() - checking if list is empty
    add(value, index) - adding new elements to the list with or without index
    get(index) - get only value of given index
    getNode(index) - get Node of given index
    del(index) - delete node of given index
    delNode(node) - delete node
    forEach - Iterate through the linked list
-------------------------------------------------------------------
`

console.log(linkedlist.isEmpty()) // true

linkedlist.add(10);
linkedlist.add(20,1);

console.log(linkedlist.length) // 2

```

**Using Strings**

```js

const { Strings } = require('dsa-logics');

const d1 = Strings.HammingDistance("saibabanadh","saibabanath");
const d2 = Strings.LavenshteinDistance("000000","111111");

console.log("Hamming Distance:", d1) // Hamming Distance: 1
console.log("Lavenshtein Distance:", d2) // Lavenshtein Distance: 6

```

**Using Strings**

```js

const { Sortings } = require('dsa-logics');

const s1 = Sortings.BubbleSort([32,54,12,7,23]);
const s2 = Sortings.MergeSort([32,54,12,7,23]);
const s3 = Sortings.QuickSort([32,54,12,7,23]);

console.log("Bubble Sort:", s1) // Bubble Sort: [ 7, 12, 23, 32, 54 ]
console.log("Merge Sort :", s2) // Merge Sort : [ 7, 12, 23, 32, 54 ]
console.log("Quick Sort :", s3) // Quick Sort : [ 7, 12, 23, 32, 54 ]

```

**Using Logics**

```js

const { Logics } = require('dsa-logics');

const result1 = Logics.CharFreq("GeeksGeeks");
const result2 = Logics.CharFreq("abbacbddbddee");

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

const result1 = Logics.NthFibonocci(7);
const result2 = Logics.NthFibonocci(11);
const result3 = Logics.NthFibonocci(33);

console.log("Result1:", result1); // 13
console.log("Result2:", result2); // 89
console.log("Result3:", result3); // 3524578
    

```
```js

const { Logics } = require('dsa-logics');

const isSumExists1 = Logics.FindSumInTwo([1,2,3,4,5,6,7,8,9], [2,3,4,5], 10);
console.log("isSumExists1:", isSumExists1); // true

const isSumExists2 = Logics.FindSumInTwo([2,1], [4,2], 10);
console.log("isSumExists2:", isSumExists2); // false

```
```js

const { Logics } = require('dsa-logics');

// Ex: Logics.FindLongestSubArrayOfSum(yourArray, desiredSum);

const longSubArr1 = Logics.FindLongestSubArrayOfSum([1,2,3,4,5,6,7,8,9], 15);
console.log("longSubArr1:", longSubArr1); // [ 1,2, 3, 4, 5]

const longSubArr2 = Logics.FindLongestSubArrayOfSum([1,2,3,1,4,5,0,0,0,6,7,8,9], 15);
console.log("longSubArr2:", longSubArr2); // [ 2, 3, 1, 4, 5, 0, 0, 0 ]

const longSubArr3 = Logics.FindLongestSubArrayOfSum([10,21,2,13], 12);
console.log("longSubArr3:", longSubArr3); // []

```