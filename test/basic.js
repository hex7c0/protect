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

    it('should return a new object', function(done) {

        a = {
            foo: 'ciao',
            2: 'ciao2',
            foo3: 3,
            foo4: false
        };
        b = protect(a);
        done();
    });
    it('should test new object', function(done) {

        for ( var i in b) {
            assert.equal(b[i], a[i]);
        }

        a[i] = 'mod';
        try {
            b[i] = 'mod';
        } catch (TypeError) {
            // pass
        }
        assert.notEqual(b[i], a[i]);
        done();
    });
});
