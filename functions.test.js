//External Citation:
//help writing test for js 
//https://jestjs.io/docs/en/getting-started.html
const addTwoNumbers = require('./functions.js');

test('adds given numbers 2 + 4 to equal 6', () => {
    expect(addTwoNumbers()).toBe(4);
});