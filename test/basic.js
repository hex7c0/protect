'use strict';
/**
 * @file basic test
 * @module protect
 * @package protect
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
  var protect = require('..');
  var assert = require('assert');
} catch (MODULE_NOT_FOUND) {
  console.error(MODULE_NOT_FOUND);
  process.exit(1);
}

/*
 * test module
 */
describe('basic', function() {

  var a, b;
  var foo4 = false;

  it('should return a new object', function(done) {

    a = {
      foo: 'ciao',
      2: 'ciao2',
      foo3: 3,
      foo4: foo4
    };
    b = protect(a);
    done();
  });
  it('should test new object', function(done) {

    for ( var i in b) {
      assert.equal(b[i], a[i]);
    }

    // i === 'foo4'
    a[i] = 'mod of a';
    try {
      b[i] = 'mod of b';
    } catch (e) {
      assert
          .equal(e.message, 'Cannot assign to read only property \'foo4\' of object');
    }
    assert.equal(a[i], 'mod of a', 'last item of a');
    assert.notEqual(b[i], 'mod of b', 'last item of b');
    assert.equal(b[i], foo4);
    assert.notEqual(b[i], a[i]);
    done();
  });
});
