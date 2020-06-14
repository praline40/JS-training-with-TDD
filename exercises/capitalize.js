'use strict';

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

// Your code:
function capitalize(s){
    let ss='';
    let c=s.charCodeAt(0);
    if(c > 96 && c < 123){
        ss+=String.fromCharCode(c - 32);
    }else{
        ss+=String.fromCharCode(c);
    }
    for (let i=1; i<s.length; i++){
        c=s.charCodeAt(i);
        if(c > 64 && c < 91){
            ss+=String.fromCharCode(c + 32);
        }else{
            ss+=String.fromCharCode(c);
        }
    }
    
    return ss;
    //return '*'+s.toLowerCase()+'*';
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof capitalize, 'function');
assert.strictEqual(capitalize('str'), 'Str');
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd');
assert.strictEqual(capitalize('STR'), 'Str');
assert.strictEqual(capitalize('zapZAP'), 'Zapzap');
// End of tests */
