"use strict";
// Data Types
let count;
let personname = "Vijay";
let flag = true;
let customer = {
    id: 101,
    name: "Ram",
    address: {
        doorno: 15,
        street: "ABC St",
        city: "Mumbai"
    }
};
let somevalue = 10;
if (count == undefined) {
    console.log("Count has not been initialized");
}
console.log(`Output - 
    Count : ${count ? count : "Not Initialized"}
    Name: ${personname}
    Flag: ${flag}

    Customer Data
    -------------
    ID: ${customer.id}
    Name: ${customer.name}
    City: ${customer.address.city}
`);
