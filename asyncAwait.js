/** 
*what is async ?
*what is await ?
*How async await works behind the scenes ?
*Examples of using async/ await 
*Erorr Handling
*Interviews
*Async await vs Promise.then/.catch
*
*/


// always return a Promise 
async function getMe(){
    return "nix";

}

const data = getMe();
console.log(data);