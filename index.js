'use strict';
/**
 * @file protect main
 * @module protect
 * @package protect
 * @subpackage main
 * @version 0.0.2
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * functions
 */
/**
 * protect your baby :o
 * 
 * @function protect
 * @param {Object} obj - your object
 * @param {Boolean} [normal] - normal constructor
 * @return {Object}
 */
function protect(obj, normal) {

  var next = Object.create(null);
  if (normal) {
    next = {};
  }

  for ( var i in obj) {
    Object.defineProperty(next, i, {
      configurable: false,
      enumerable: true,
      value: obj[i]
    });
  }

  return next;
}
module.exports = protect;
