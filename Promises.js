// const cart = ['shoes','pants','kurta'];

// common mistake while Promise Chaining
createOrder(cart, function (orderId){
    proceedToPayment(orderId, function (paymentInfp){
        showOrderSummary(paymentInfp,function(){
            updateWalletBalance();
        });
    });
});

createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfp => proceedToPayment(paymentInfpId))
  .then(paymentInfp => proceedToPayment(paymentInfpId))


// createOrder(cart, function (orderId){
//     proceedToPayment(orderId);
// });



// const promise = createOrder(cart);
// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });
// give 1 time excestion 100% sureity & scuretity with js

// {data: undefined }

const gitHub_API= "https://randomuser.me/api/"

const user = fetch(gitHub_API);

console.log(user);

// 2 thing in Promise :
// Promise State  :  state of Promise 
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed. 


// promise result  : the data store in after coming from api 


// what is Promise? --> placeholder, contain for future value (same people say)
// --> mdn(A Promise is an Object representing the eventual (at the end) comletion of async operation )


// we don't pass whole to other function 
// Promise is guntity and turthes 


