"use strict";
// Dispalys Customer Data
let data = [
    {
        code: 13324,
        name: "Ram Lal",
        balance: 544545.44
    },
    {
        code: 13325,
        name: "Kishori Lal",
        balance: 600000.44
    },
    {
        code: 13326,
        name: "Karodi mal",
        balance: 15000045.44
    }
];
console.log(`
                                        **** ACCOUNTS LEDGER *****
                Date: ${new Date().toDateString()}                Time: ${new Date().toTimeString()}
            ========================================================================================
                CUSTOMER ID         CUSTOMER NAME                       BALANCE (Rs.)
            ========================================================================================  
                `);
for (let c of data) {
    console.log(`
                ${c.code}         ${c.name}                         ${c.balance}`);
}
