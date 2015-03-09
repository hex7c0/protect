'use strict';
/**
 * @file basic example
 * @module protect
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

var protect = require('..');

var a = protect({
  foo: 'ciao'
});

a.ciao = 'ciao'; // no error, because does not overwrite anything
a.foo = 123; // throw TypeError
