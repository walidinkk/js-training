'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

 function capitalize(str){

   var result = "";
   result += str[0].toUpperCase();
   var i = 0;
   for (i = 1; i < str.length ;i++){
     result += str[i].toLowerCase();
   }
   return result
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
