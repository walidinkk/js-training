'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(str){
   let words = str.split(' ')
   for(let i = 0 ; i < words.length; i++){
     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   }
  return words.join(' ')
 }
 //* Begin of tests
 const assert = require('assert')
 assert.strictEqual(jadenCase.length, 1)
 assert.deepStrictEqual(jadenCase('bonjour monsieur'), 'Bonjour Monsieur')
 assert.deepStrictEqual(jadenCase('last test'), 'Last Test')
