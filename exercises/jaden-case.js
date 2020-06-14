'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

/**   takes an array of strings
 * and return a string of all the element separated by a space */
function sentence(myStrings){
    let s=myStrings[0];
    for(let i=1; i<myStrings.length; i++){
        s+=' '+myStrings[i];
    }
    return s;
}

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


function jadenCase(s){
    s = s.split(" ");
    for (let i=0; i<s.length; i++){
        s[i] = capitalize(s[i]);
    }
    s= sentence(s);

    return s;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.deepStrictEqual(jadenCase('jE ne sUis pas Un hERo'), 'Je Ne Suis Pas Un Hero');
 
// End of tests */
