//Devin Smith
//External Citation:
//help writing test for js 
//https://jestjs.io/docs/en/getting-started.html

//should pass but not working
const addTwoNumbers = require('./functions.js');

test('adds given numbers 2 + 4 to equal 6', () => {
    expect(addTwoNumbers()).toBe(6);
});

//should fail
//test('adds two given numbers with incorrect sum', ()=> {
 //   expect(addTwoNumbers()).toBe(19);
//});