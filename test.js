const reversed = require('./reverse');
const charMax = require('./maxChar');
const palandrome = require('./palandrome');
const fizzBuzz = require('./fuzz-buzz');
const chunk = require('./chunk-with-slice');
const chunked = require('./chunk-with-splice');
const chunkWithForLoop = require('./chunk-for-loop');
const Capital = require('./capilaze');
const Capitalize = require('./Capitalize');



test('Check if palandrom or not', () => {
  console.log(charMax(['abcd','1','1','2']))
  
});


test('Check if palandrom or not', () => {
  console.log(palandrome('abba'))
  
});

test('Fizz Buzz', () => {
  console.log(fizzBuzz(9))
  
});


test('Chunked Array with Slice', () => {
  console.log(chunk([1,2,3,4,5,6,7,8,9],3))
  
});


test('Chunked Array with Splice', () => {
  console.log(chunked([1,2,3,4,5,6,7,8,9],3))
  
});

test('Chunked Array with  For Loop', () => {
  console.log(chunkWithForLoop([1,2,3,4,5,6,7,8,9],3))
  
});

test('Capital  sentence', () => {
  console.log(Capital('frioui meher engineering of computer science'))
  
});

test('Capital  sentence', () => {
  console.log(Capitalize('frioui engineering of computer science'))
  
});

