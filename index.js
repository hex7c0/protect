'use strict';
/**
 * @file protect main
 * @module protect
 * @package protect
 * @subpackage main
 * @version 0.0.1
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
 * @function setHeader
 * @param {Object} obj - your object
 * @return {Object}
 */
function protect(obj) {

    var next = {};

    for ( var i in obj) {
        Object.defineProperty(next, i, {
            enumerable: true,
            configurable: false,
            value: obj[i]
        });
    }

    return next;
}
module.exports = protect;
