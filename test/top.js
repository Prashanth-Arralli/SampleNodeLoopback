'use strict';
function importTest(name, path) {
    describe(name, function() {
        require(path);
    });
}

describe('top', function() {
  beforeEach( function() {
    console.log('Started mocha test cases');
  });
  importTest('employee', './employee');
  after(function() {
    console.log('Done with test cases');
  });
})