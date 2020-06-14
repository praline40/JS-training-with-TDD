'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
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

function multiply(m,n){
    
    if (m===0||n===0){
        return 0;
    }else if(sameSign(m,n)){
        m=abs(m);
        n=abs(n);
        const mc = m; 
        for (let i=2; i<=n; i++){
            m+=mc;
        }
        return m;
    }else{
        m=abs(m);
        n=abs(n);
        const mc = m; 
        for (let i=2; i<=n; i++){
            m+=mc;
        }
        return -m;
    }
     
       
       
       
       
       
       
        
    
    
    
     
   
    
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
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
