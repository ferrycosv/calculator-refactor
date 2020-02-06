// test cases for your doMath function
// these are all correct, you don't need to change them
const doMathTests = [
  { name: 'add - 1', args: ['add', 0, 0], expected: 0 },
  { name: 'add - 2', args: ['add', -4, 3], expected: -1 },
  { name: 'add - 3', args: ['add', -5, -1], expected: -6 },
  { name: 'min - 1', args: ['min', 1, 0], expected: 1 },
  { name: 'min - 2', args: ['min', 2, 1], expected: 1 },
  { name: 'min - 3', args: ['min', -5, -1], expected: -4 },
  { name: 'div - 1', args: ['div', 4, 2], expected: 2 },
  { name: 'div - 2', args: ['div', 3, 2], expected: 1.5 },
  { name: 'div - 3', args: ['div', 1, 4], expected: .25 },
  { name: 'mul - 1', args: ['mul', 3, 2], expected: 6 },
  { name: 'mul - 2', args: ['mul', 8, 0], expected: 0 },
  { name: 'mul - 3', args: ['mul', -1, -1], expected: 1 },
  { name: 'invalid - 1', args: ['tree', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 2', args: ['book', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 3', args: ['minus', 0, 0], expected: 'invalid operation' },
  // write 7 more test cases for doMath
  { name: 'add - 4', args: ['add', -5.1, 1], expected: -4.1 },
  { name: 'min - 4', args: ['min', 5.3, -1], expected: 6.3 },
  { name: 'div - 4', args: ['div', 1, 0], expected: Infinity },
  { name: 'mul - 4', args: ['mul', 2, 0.5], expected: 1 },
  { name: 'invalid - 4', args: ['qwerty', 0.1, 2], expected: 'invalid operation' },
  { name: 'invalid - 5', args: ['uiop', 1.5, 0], expected: 'invalid operation' },
  { name: 'invalid - 6', args: ['temp', 0, 4.6], expected: 'invalid operation' },
];
// refactor the logic from the calculator tutorial into this function
function doMath(operation, a, b) {
  // these if statements make sure all arguments are the correct type
  // they will throw errors if your handler passes the wrong type arguments
  if (typeof operation !== 'string') {
    throw new Error('operation should be a string');
  }
  if (typeof a !== 'number') {
    throw new Error('a should be a number');
  }
  if (typeof b !== 'number') {
    throw new Error('b should be a number');
  }
  // write your code below this comment:
  if (isNaN(a) || isNaN(b)) {
    return 'invalid operation';
  } else if (operation === 'add') {  
    return a+b;
  } else if (operation === 'min') {  
    return a-b;
  } else if (operation === 'mul') {  
    return a*b;
  } else if (operation === 'div') {  
    return a/b;    
  } else {
    return 'invalid operation';
  }
}
testing(doMath, doMathTests);
