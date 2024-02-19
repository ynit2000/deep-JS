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


// lingo for interviewer 

        //          settled ----> Get to result 
        //             |
        //       -------------
        //       |           |
        // resolve         reject
        // success         failure
        // fulfilled       reject

        

//  4 Type of Promise :
              
                //    1. all {"Fast fail"}
                //    2.allSettled {"wait for all to settled(resolve/reject)"}
                //    3.race {"wait for 1st  comer settled (resolve/reject) "}
                //    4.any {"wait for 1st success "}