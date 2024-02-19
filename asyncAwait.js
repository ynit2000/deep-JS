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
    resolve("Promise Resolved Value!!");
});

