# Functional Branch

`unl` exports only one function that takes a `test`, a `left`, and a `right`
function and return a combined one that will run `left` if `test` returns falsy
and `right` otherwise

# Example

```js
const unless = require('unl');

const isOdd = x => x % 2;

const left = x => `${x} is not odd`;
const right = x => `${x} is not even`;

const fn = unless(isOdd, left, right);

console.log(fn(2)); // returns 2 is not odd
console.log(fn(1)); // returns 1 is not even
```
