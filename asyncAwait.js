/** 
*what is async ?  --> is keyword to create async function {what is async func. -->which are " always return a Promise"}

              const p = new Promise((resolve, reject) => {
                  resolve("Promise Resolved Value!!");
              });
              
              // always return a Promise 
              async function getMe(){
                  // return "nix";
                  
                  return p;
              }
              
              const dataPromise = getMe();
              // console.log(data);
              
              dataPromise.then((res) => console.log(res));

*what is await ?

*How async await works behind the scenes ?
*Examples of using async/ await 
*Erorr Handling
*Interviews
*  Async await vs Promise.then/.catch :::--->
                                         Async await is just stanyixitcal sugar on "Promise.then/.catch"
*
* Async and await used for handing Proimse *
*/

// interview Tip 
//   what is async await : ---> don't randomly start explaining
//               true way  : ---> async is keeyword which is used with function --> async function   -->> await can only be used inside an async function 




// real used of Promise in APi  and handing error using "try"
const API_URl = "https://api.github.com/users/ynit2000"

async function handleMyPromise(){

    const data =  await fetch(API_URl)

   try{
     const jsonValue = await data.json()  // this again is Promise here 

     // fetch() ==> Response.json()  ==> jsonValue

     console.log(jsonValue); 
   } catch (err){
    console.log(err);
   }

}
handleMyPromise();










const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise Resolved Value!! P1");
    },5000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise Resolved Value!! P2");
    },10000)
});
// async and await handing Promise


//  await can only be used inside an async function 
async function handlePromise(){
    // Js Engine was waiting for promise to resolved
    console.log("Hello! Good!");
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val); 
              

    // output : Hello! Good! 
    //        : Namaste JavaScript (after 10sec)
    //        : Promise Resolved Value!! (after 10sec)

    const val2 = await p2;
    console.log("Namaste JavaScript Part2");
    console.log(val2); 

    // case : when we take "P"
    // output : Hello! Good! 
    //        : Namaste JavaScript (after 10sec)
    //        : Promise Resolved Value!! (after 10sec)
    //        : Namaste JavaScript Part2 (after 10sec) just after the "all 10sec"
    //        :  Promise Resolved Value!! (after 10sec)
              

}
handlePromise();


// before async and await handing Promise

// function getData(){
//     // Js Engine will not wait for promise to be resolved
//     p.then(res => console.log(res));
// }

// getData();