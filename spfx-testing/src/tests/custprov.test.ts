/// <reference types="jest"/>

import { ICustomer } from "../../src/common/ICustomer";
import { CustomerProvider } from "../../src/services/CustomerProvider";

// Test cases to test the Customer Provider
describe('Test the CustomerProvider',() =>{
    test('Basics test',()=>{
        let cp = new CustomerProvider();

        let c : ICustomer = {
            accountNo:1001,
            name: "Vijay",
            balance: 10000.00
        };

        cp.add(c);
        
        expect(cp.Count).toBe(1);
        expect(cp.Items[0].balance).toBe(10000);
    });
});