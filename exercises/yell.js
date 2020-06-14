'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(s){
  
    var result = '';
    for (let i=0; i<s.length; i++){
        let c=s.charCodeAt(i);
        if(c > 96 && c < 123){
            result+=String.fromCharCode(c - 32);
        }else{
            result+=String.fromCharCode(c);
        }
    }
    
    return result;
      
    //return s.toUpperCase();
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);


assert.deepStrictEqual(yell('abc'), 'ABC');
assert.deepStrictEqual(yell('aBc'), 'ABC');
 
// End of tests */
