// named export is exporting multiple things as key-value pairs in module.exports

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

// let's export the functions
// module.exports = {
//     add,
//     subtract
// }

// alternatively, we can export the functions like this
module.exports.add = add;
module.exports.subtract = subtract;