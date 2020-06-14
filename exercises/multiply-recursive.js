'use strict';

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code:

function abs(num){
    return (num<0 ? -num : num);
}

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

function multiply (M,N){
    
    let mc = M;
    let i=0;
   
    function _multiply (m,n){
        i++;
        if(i===1){
            if (m===0||n===0){
                return 0;
            }else if(sameSign(m,n)){
                m=abs(m);
                n=abs(n);
                mc=abs(mc);
                M=abs(M);
            }else{
                m=abs(m);
                n=abs(n);
                mc=abs(mc);
                M=abs(M);
                mc=-mc;
                m=-m;
                M=-M;
            } 
        }
       
        if (n>1){
          M+=m;
          _multiply(mc,n-1);
        }
        
        
        return M;
    }
        
    return _multiply(M,N);
      
    
}










//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('while'), false);
assert.strictEqual(multiply.toString().includes('for'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
