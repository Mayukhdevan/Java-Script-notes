// Common js modules export

// Export multiple objects
// ---------------------------------
const add = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a-b);

exports.add = add;
exports.sub = sub;

// Export single(default) object
// -------------------------------

// const add = (a, b) => console.log(a + b);
// module.exports = add;
