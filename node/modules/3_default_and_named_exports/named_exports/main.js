// while importing named exports, we need to know the names of the things we are importing

// const math = require('./math');  // we have already seen this in a previous example

// so, now, let's try to destruct the object
// order of the keys does not matter
const { subtract, add } = require('./math');

console.log(add(1, 2));
console.log(subtract(1, 2));