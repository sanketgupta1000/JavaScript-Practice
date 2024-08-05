// let's import the module
const math = require('./math');
// to import core, or third party modules, we don't need to use the path, simply the name of the module
// const fs = require('fs');

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));