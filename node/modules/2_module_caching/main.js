// let's import the module
const math = require('./math');
// require actually executes the code in the module, and caches the result
// so, if we require the module again, the code is not executed again

// let's import the module again
const math2 = require('./math');

console.log(math.add(1, 2));
console.log(math2.subtract(1, 2));