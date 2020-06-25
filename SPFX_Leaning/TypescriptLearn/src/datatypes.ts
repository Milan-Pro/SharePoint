// Data Types

let count : number;
let personname : string = "Vijay";
let flag : boolean = true;


let customer = {
    id: 101,
    name: "Ram",
    address: {
        doorno: 15,
        street: "ABC St",
        city: "Mumbai"
    }
};

let somevalue: any = 10;

if(count==undefined) {
    console.log("Count has not been initialized");
}

console.log(`Output - 
    Count : ${ count ? count : "Not Initialized" }
    Name: ${ personname }
    Flag: ${ flag }

    Customer Data
    -------------
    ID: ${ customer.id }
    Name: ${ customer.name }
    City: ${ customer.address.city }
`);



