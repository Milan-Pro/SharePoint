// OOPS 3 - Array of interface objects
var products = [
    { code: 1, name: "Pencil", price: 10 },
    { code: 2, name: "Pen", price: 20 },
    { code: 3, name: "Notepad", price: 15 },
    { code: 4, name: "Diary", price: 100 }
];
function displayProducts(data) {
    console.log("\n                           **** STOCK INFORMATION **** \n    \n    Date: " + new Date().toDateString() + "\n    ====================================================================================\n        Product ID          Product Name                Price\n    ===================================================================================");
    data.forEach(function (prod) {
        console.log("\n        " + prod.code + "      " + prod.name + "              " + prod.price + "\n        ");
    });
}
displayProducts(products);
