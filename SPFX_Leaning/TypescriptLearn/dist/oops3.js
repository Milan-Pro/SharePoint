"use strict";
// OOPS 3 - Array of interface objects
let products = [
    { code: 1, name: "Pencil", price: 10 },
    { code: 2, name: "Pen", price: 20 },
    { code: 3, name: "Notepad", price: 15 },
    { code: 4, name: "Diary", price: 100 }
];
function displayProducts(data) {
    console.log(`
                           **** STOCK INFORMATION **** 
    
    Date: ${new Date().toDateString()}
    ====================================================================================
        Product ID          Product Name                Price
    ===================================================================================`);
    data.forEach((prod) => {
        console.log(`
        ${prod.code}          ${prod.name}              ${prod.price}
        `);
    });
}
displayProducts(products);
