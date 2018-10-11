const reversed = require('./reverse');

test('Reverse reverses a string', () => {
  console.log(reversed('abcd'))
  console.log(reversed('BOM'))
});