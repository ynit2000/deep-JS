// What is a callback Function in JS ? --> 1st class cittizen
// remember : time, tides, js never wait for anyone

setTimeout(function(){
    console.log("timer");
}, 5000)

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});



// JavaScript is a synchronous and singel-threded language

// Blocking the main thread 

// Power of Callbacks?

// Deep about Event Listeners

// Closures Demo with Event Listeners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListeners 



function attachEventListeners(){
let count = 0;

document.getElementById("clickme")
.addEventListener("click", function (){
    console.log("button clicked", ++count);
})
}
attachEventListeners();