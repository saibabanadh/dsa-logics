# DSA Logics
Data Structure and Algorithms Logics for NodeJS

## Available Libraries

* DataStructures
    - LinkedList

## Installation

To install the algorithms for use in your project run:

`yarn add dsa-logics`

or if you don't have Yarn installed, run:

`npm install dsa-logics`

Once you've installed the library, you can start using it in your project like this:

**Using Linked List**

`const { Algorithms, DataStructures } = require('dsa-logics');`
`let linkedlist = new DataStructures.LinkedList();`
`check available options using linkedlist.help()`

`linkedlist.add(10);`
`linkedlist.add(20,1);`

`console.log(linkedlist.length) // prints - 2`