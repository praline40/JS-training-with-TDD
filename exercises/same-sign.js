'use strict';

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code:
function sameSign (num1, num2){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1<0 && num2<0 || num1>0 && num2>0 || num1===0 && num2===0){
            return true;
        }else{
            return false;
        }
    }else{
        console.log('Only numbers accepted');
        return null;
    }
}

//* Begin of tests
const assert = require('assert');
const { sign } = require('crypto');
const { REPL_MODE_STRICT } = require('repl');

assert.strictEqual(typeof sameSign, 'function');
assert.strictEqual(sameSign.length, 2);
assert.notStrictEqual(sameSign, Math.sameSign);
assert.strictEqual(sameSign(-2, -1), true);
assert.strictEqual(sameSign(0, 0), true);
assert.strictEqual(sameSign(12, 3232), true);
assert.strictEqual(sameSign(1, -1), false);
assert.strictEqual(sameSign(-231, 1), false);
assert.strictEqual(sameSign(-231, 0), false);
assert.strictEqual(sameSign(0, 231), false);
assert.strictEqual(sameSign(231, -233), false);
// End of tests */
