'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str){
  return str.toUpperCase()
}



//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(yell('bonjour monsieur'), 'BONJOUR MONSIEUR')
assert.deepStrictEqual(yell('laST'), 'LAST')
// End of tests */
