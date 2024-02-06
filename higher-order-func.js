const radius = [3, 1, 2, 4];

const area = function(radius){
    return Math.PI * radius * radius;
};
const diameter = function(radius){
    return  radius * 2;
};
const circumference = function(radius){
    return Math.PI * radius * 2;
};

// const calculate = function (radius , logic){
Array.prototype.calculate = function (radius , logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(radius.map(area));
console.log(calculate(radius, diameter));
console.log(calculate(radius,circumference));



// write code in tecchnilcal round of interview 

// const calculateArea = function (radius) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2  * Math.PI* radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));


// Map
console.log(radius.map(area)); 