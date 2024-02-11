console.log("nix");

setTimeout(function (){

    console.log("JavaScript");

},5000)

console.log("nix 2");

// how to work  in JS code


const cart = ['shoes','pants','kurta'];

api.createOder(cart, function(){

    api.proceedToPayment(function(){

        api.showOrderSummary( 
            function (){
                api.updateWallet();
            }
        )

    })

})


// Recaps

// 0. Importance of callbacks  : super cool way to handel asynth ways
// 1. Issue with callbacks :
//    a : callback Hell 
//    b : Inversion of Control (we give control of function to other function)







