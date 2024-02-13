const cart = ["shoes", "pants", "kurta"];



createOrder(cart)  // orderId
    .then(function (orderId) {
        console.log(orderId);
        return orderId;

        // proceedToPayment(orderId)
    })
    .then(function () {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);  
        // error handing from any if it's top only handed top error and bottom hand aobove all error

    })

    // after catch No matter what Happnes, I will definietely be called.  

    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .then(function(orderId){
        console.log("No matter what Happnes, I will definietely be called.");
    })


// imp part this "Creating a Promise" we can resolve, reject a promise

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder
        // validateCart
        // orderId

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);

        }

    });
    return pr;
}

function proceedToPayment(orderId) {

    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    return false;
}