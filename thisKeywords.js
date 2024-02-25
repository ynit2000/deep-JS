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

    // 'this' keyword  value depends on "how the function is called" (window)

    x();   // undefined
    window.x();  // windows


     
    //  this value depends on how this is called ( window )

 

// this value depents on how this is called ( window )


// this inside a object's method 
//  { here 'x' method of 'obj'}
const obj ={
    a: 10,
    x: function (){
        console.log(this); // here 'this' reffer to a,x method of 'obj'
        console.log(this.x); // here 'this' reffer to x method of 'obj'
        console.log(this.a); // here 'this' reffer to "10" method of 'obj'
    }

}
obj.x();


const student = {
    name: "nix",
    printName: function (){
        console.log(this.name);
    },
}
const student2 = {
    name: "rix",
    
}
student.printName();

student.printName.call(student2);  // value of thsi student2

// call apply bind methods ( sharing methods ) { ***topic on which interviewer like to ask Ques about** }

// this inside arrow function 

// this inside nested arrow function

// this  inside DOM