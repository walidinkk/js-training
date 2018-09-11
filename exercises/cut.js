'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(str){
   return str.slice(2)
 };

function cutLast(str){
   return str.slice(0, str.length - 2)
};

function cutFirstLast(str){
  return str.slice(2, str.length - 2)
};


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, "function")
assert.strictEqual(typeof cutLast, "function")
assert.strictEqual(typeof cutFirstLast, "function")
assert.strictEqual(cutFirst('string'), 'ring')
assert.strictEqual(cutLast('qsdqsdqsd'), 'qsdqsdq')
assert.strictEqual(cutFirstLast('Testa'), 's')
assert.strictEqual(cutFirstLast('Testing'), 'sti')
// End of tests */
