'use strict';
/**
 * @file basic test
 * @module protect
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
var protect = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('basic', function() {

  describe('create', function() {

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
        assert.equal(/Cannot assign to read only property /.test(e.message),
          true);
      }
      assert.equal(a[i], 'mod of a', 'last item of a');
      assert.notEqual(b[i], 'mod of b', 'last item of b');
      assert.equal(b[i], foo4);
      assert.notEqual(b[i], a[i]);
      done();
    });
    it('should add new item to new object, but isn\'t protected',
      function(done) {

        b.ciao = 'ciao';
        assert.equal(b.ciao, 'ciao');
        b.ciao = 'ciao2';
        assert.equal(b.ciao, 'ciao2');
        done();
      });
  });

  describe('{}', function() {

    var a, b;
    var foo4 = false;

    it('should return a new object', function(done) {

      a = {
        foo: 'ciao',
        2: 'ciao2',
        foo3: 3,
        foo4: foo4
      };
      b = protect(a, true);
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
        assert.equal(/Cannot assign to read only property /.test(e.message),
          true);
      }
      assert.equal(a[i], 'mod of a', 'last item of a');
      assert.notEqual(b[i], 'mod of b', 'last item of b');
      assert.equal(b[i], foo4);
      assert.notEqual(b[i], a[i]);
      done();
    });
    it('should add new item to new object, but isn\'t protected',
      function(done) {

        b.ciao = 'ciao';
        assert.equal(b.ciao, 'ciao');
        b.ciao = 'ciao2';
        assert.equal(b.ciao, 'ciao2');
        done();
      });
  });
});
