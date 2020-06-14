'use strict';

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

// Your code:
function keepFirst(s){
    let l=s.length;
    if (l>=2){
        s = s.substring(0,2);
    }         
    return s;
}

function keepLast(s){
    let l=s.length;
    if (l>=2){
        s = s.substring(l-2,l);
    } 
    return s;
}

function keepFirstLast(s){
    let l=s.length;
    if (l>=4){
        s = s.substring(2,4);
    } 
    return s;
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(keepFirst.length, 1);

assert.deepStrictEqual(keepFirst('Abc'), 'Ab');
assert.deepStrictEqual(keepFirst('bc'), 'bc');
assert.deepStrictEqual(keepLast('aBc'), 'Bc');
assert.deepStrictEqual(keepLast('Bc'), 'Bc');
assert.deepStrictEqual(keepFirstLast('ABC'), 'ABC');
assert.deepStrictEqual(keepFirstLast('ABCD'), 'CD');
assert.deepStrictEqual(keepFirstLast('ABCDE'), 'CD');
// End of tests */
