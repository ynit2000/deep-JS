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
*Async await vs Promise.then/.catch
*
* Async and await used for handing Proimse *
*/

const p = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise Resolved Value!!");
    },10000)
});
// async and await handing Promise

//  await can only be used inside an async function 
async function handlePromise(){
    const val = await p;
    console.log(val); 
}
handlePromise();


// before async and await handing Promise

function getData(){
    // Js Engine will not wait for promise to be resolved
    p.then(res => console.log(res));
}

getData();