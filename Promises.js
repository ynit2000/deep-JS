const cart = ['shoes','pants','kurta'];

createOrder(cart, function (orderId){
    proceedToPayment(orderId);
});



const promise = createOrder(cart);
promise.then(function (orderId){
    proceedToPayment(orderId);
});
// give 1 time excestion 100% sureity & scuretity with js

// {data: undefined }

const gitHub_API= "http://api.github.com/user/ynit200"

const user = fetch(gitHub_API);

// 2 thing in Promise :
// Promise State  :  state of Promise 
// promise result  : the data store in after coming from api 

console.log(user);


