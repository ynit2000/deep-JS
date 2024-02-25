"use strict";

// this  in globel space 

console.log(this);    // globalObject - window, gloabol


// this inside a function 
function x(){
    // the value depends on strict / non strict mode 
    console.log(this);
}



// this in strict mode - ( this substitution ) :
//    if the value of "this" keyword is undefined or null 

    //   'this' keywords will be replaced with globalObject
    //  only  in non strict mode 

    // 'this' keyword  value depends on how the function is called (window)

    x();   // undefined
    window.x();  // windows


     
    //  this value depends on how this is called ( window )

 

// this value depents on how this is called ( window )


// this inside a object's method

// call apply bind methods ( sharing methods )

// this inside arrow function 

// this inside nested arrow function

// this  inside DOM