// trust isseues

console.log("Started");

setTimeout(function ne() {
    console.log("Callback");
}, 5000);

// million

let startDate = new Date().getDate();
let endDate = startDate;
while(endDate < startDate +10000){
    endDate = new Date().getTime();
}
console.log("While expires");
