# DSA Logics
Data Structure and Algorithms Logics for NodeJS

## Available Libraries

* DataStructures
    - LinkedList
* Strings
    - HammingDistance
    - LavenshteinDistance
* Logics
    - CharFreq

## Installation

To install the algorithms for use in your project run:

`yarn add dsa-logics`

or if you don't have Yarn installed, run:

`npm install dsa-logics`

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