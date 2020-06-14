'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(s){
    let l=s.length;
    if (l>=2){
        s = s.substring(2,l);
    }         
    return s;
}

function cutLast(s){
    let l=s.length;
    if (l>=2){
        s = s.substring(0,l-2);
    } 
    return s;
}

function cutFirstLast(s){
    let l=s.length;
    if (l>=4){
        s = s.substring(2,l-2);
    } 
    return s;
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(cutFirst.length, 1);

assert.deepStrictEqual(cutFirst('Abc'), 'c');
assert.deepStrictEqual(cutFirst('bc'), '');
assert.deepStrictEqual(cutLast('aBc'), 'a');
assert.deepStrictEqual(cutLast('Bc'), '');
assert.deepStrictEqual(cutFirstLast('ABCD'), '');
assert.deepStrictEqual(cutFirstLast('ABCDE'), 'C');
 
// End of tests */
