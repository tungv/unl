const brn = require('brn');

module.exports = function unless(test, left, right) {
  return brn(test, right, left);
};
