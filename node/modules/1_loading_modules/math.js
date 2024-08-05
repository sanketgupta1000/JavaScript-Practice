function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

// let's export the functions

// now, we can only export a single object
module.exports = {
    add,
    subtract
}