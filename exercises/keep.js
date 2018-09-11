'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(str){

  return str.slice(0, 2)
};

function keepLast(str){
  return str.slice(str.length - 2)
};

function keepFirstLast(str){
  let i = 2
  var result = ""
  result = str[3] + str[4]
  return result
};


//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('salut'), 'sa')
assert.strictEqual(keepLast('salut'), 'ut')
assert.strictEqual(keepFirstLast('salutations'), 'ut')

// End of tests */
