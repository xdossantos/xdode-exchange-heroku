// First we bring in the assertion module from chai 
// To run our test type "npm run test"
const assert = require('chai').assert;
// Here I have included code that could be used to test each individual function from our app.js file 

const app = require('../app');

// This code was appearing multiple times so I put it in one place (refactoring)
calculateTaxResult = app.calculateTax(100000);

// Here we create a test. Take note that we have used a nested describe 
describe('App', function () {
  describe('calculateTax()', function () {
    it('calculateTax should be above 0', function () {
      assert.isAbove(calculateTaxResult, 0);
    });

    it('calculateTax should return type number', function () {
      assert.typeOf(calculateTaxResult, 'number');
    });
  });
  //We can add more describes here to test exports from our app.js file . In our context there is only one object being exported 
});