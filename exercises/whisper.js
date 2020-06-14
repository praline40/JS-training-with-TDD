'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(s){
    var result = '*';
    for (let i=0; i<s.length; i++){
        let c=s.charCodeAt(i);
        if(c > 64 && c < 91){
            result+=String.fromCharCode(c + 32);
        }else{
            result+=String.fromCharCode(c);
        }
    }
    
    return result+'*';
    //return '*'+s.toLowerCase()+'*';
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);

assert.deepStrictEqual(whisper('Abc'), '*abc*');
assert.deepStrictEqual(whisper('aBc'), '*abc*');
assert.deepStrictEqual(whisper('ABC'), '*abc*');
// End of tests */
