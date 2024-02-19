const p1 = new Promise((resolve, reject) => {
    setInterval(() => resolve("P1 Sucess"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setInterval(() => resolve("P2 Sucess"), 1000);
    setInterval(() => reject("P2 Fail"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setInterval(() => resolve("P3 Sucess"), 2000);
})

// is safaty ways 
// Promise.allSettled([p1,p2,p3]).then(res => {
Promise.any([p1,p2,p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    // console.error(err);
    console.log(err);
});