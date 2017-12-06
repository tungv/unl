const brn = require('brn');
const neg = require('neg');

module.exports = function unless() {
  return brn(neg(arguments[0]), arguments[1], arguments[2]);
};
