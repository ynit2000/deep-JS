"use strict";

// this  in globel space 

console.log(this);    // globalObject - window, gloabol


// this inside a function 
function x(){
    // the value depends on strict / non strict mode 
    console.log(this);
}
x();


// this in strict mode - ( this substitution )

// this value depents on how this is called ( window )

// call apply bind methods ( sharing methods )

// this inside arrow function 

// this inside nested arrow function

// this  inside DOM