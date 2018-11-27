# Javascript Array Search

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save javascript-array-search

Or [yarn](https://yarnpkg.com/):

    $ yarn add javascript-array-search
    
Usage
-----------

Iterates over elements of `collection`, returning an array of all elements where any their specified `fields` include the every word in the `term` string.

###Arguments

| parameter   | type    | description                          |
| ---------   | ------- | ------------------------------------ |
| `collection`| Array   | The collection to iterate over       |
| `term`      | string  | The search term                      |
| `fields`    | Array   | The element's fields to be searched. |

###Returns

`Array`Returns the new filtered array.

###Example
```js
const users = [
  { 'user': 'Barney Rubble',      'age': 36 },
  { 'user': 'Fred Flintstone',    'age': 40 },
  { 'user': 'Pebbles Flintstone', 'age': 1 }
];
 
search(users, 'Fred Flint', ['user']);
// => objects for ['Fred Flintstone']
 
search(users, 'Flintstone', ['user'])
// => objects for ['Fred Flintston', 'Pebbles Flintstone']
 
search(users, '4', ['age']);
// => objects for ['Barney Rubble']
 
search(users, 'Flintstone 1', ['user', 'age]);
// => objects for ['Pebbles Flintstone']
```