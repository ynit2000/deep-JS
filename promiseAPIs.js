// 4 type Promise: 
    //          1. Promise.all()  : 3 user making api call parallel call at same time
                //   const promises = [promise1, promise2, promise3];
                                 //   3s         1s         2s  

                //   Promise.all(promises)
                //   all request fill full 
                //   after 3s it's give [val1, val2, val3]
                //   wait for all of their to finish 

    // fail fast 
                 //   take ex. if promise2 is fail after 1s 
                //   immediately when fail this going to show error 



//                 2. Promise.allSettled() 

                    //   3 user making api call parallel call at same time
                  //   const promises = [promise1, promise2, promise3];
                                     //   3s Y        1s  N       2s Y
                 // Promise.allSettled(promises)
                //  wait for all Promise to settled after 3sec 
                //   it give  array [val1,error,val3]

//                 3. Promise.race() 

                  //   const promises = [promise1, promise2, promise3];
                                    //   3s        1s        2s               
                 // Promise.race(promises)

                //  value of 1st settled Promise (this is race)
                //  after 1s ==> val2 

                // Promise2 is fail 
                // after 1s ==> erorr 

//                 4. Promise.any()

                  //   const promises = [promise1, promise2, promise3];
                                    //   3s        1s        2s               
                  // Promise.any(promises)
                //    this race but only for success 

                //    wait for 1st success => val2  

                //    take example  Promise2 fail then it's go for promise3 

                //    wait for 1st success => val3

                // what if all fail => AgrgregateErorr array = [error1,error2,error3]


