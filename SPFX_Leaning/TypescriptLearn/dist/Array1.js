"use strict";
// Array Example
let nos = [12, 34, 545, 55, 666, 33];
let flags = [false, true, false, false, true];
let names = ["red", "blue", "green", "yellow"];
let customers = [
    {
        id: 1001,
        name: "ABC Ltd."
    },
    {
        id: 1002,
        name: "Microsoft",
        balance: 1000,
        creditLimt: 30000000,
        days: 90
    },
    {
        id: 1003
    }
];
console.log(nos[0]);
console.log(nos[3]);
console.log(names[2]);
names[2] = "Orange";
nos[1]++;
console.log("Nos array - ");
for (let i = 0; i < nos.length; i++) {
    console.log(nos[i]);
}
names.forEach(function (item) {
    console.log(`${item}`);
});
