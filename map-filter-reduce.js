const arr = [5, 1, 3, 2, 6];

// reduce ;; sum or maxf



// filter odd values

const outputt = arr.filter((x) => x > 4);
console.log(outputt);


// function greaterThan4(x){
//     return x > 4;
// }


// transformation 
// Double -- [10, 2, 6, 4, 12];

// Triple -- [15, 3, 9, 6, 18];

// Binary -- ["101","1","11","10","110"];

function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}

const output = arr.map(double);
const outputs = arr.map(triple);
const outputss = arr.map(binary);
console.log(output);
console.log(outputs);
console.log(outputss);
