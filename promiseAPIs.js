// 4 type Promise: 
                // 1. Promise.all()  : 3 user making api call parallel call at same time
                //   const promises = [promise1, promise2, promise3];
                                 //   3s         1s         2s  

                //   Promise.all(promises)
                //   all request fill full 
                //   after 3s it's give [val1, val2, val3]
                //   wait for all of their to finish 

                
                 //   take ex. if promise2 is fail after 1s 
                //   immediately this going to show error 



//                 2. Promise.allSettled() 
//                 3. Promise.race() 
//                 4. Promise.any()

