'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(str){
  return str.toLowerCase()
}

//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(whisper('ABC'), 'abc')
// End of tests */
