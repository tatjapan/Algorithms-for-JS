const palindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"山本山" is a palindrome', () => {
  expect(palindrome('山本山')).toBeTruthy();
});

test('" 山本山" is not a palindrome', () => {
  expect(palindrome(' 山本山')).toBeFalsy();
});

test('"山本山 " is not a palindrome', () => {
  expect(palindrome('山本山 ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});