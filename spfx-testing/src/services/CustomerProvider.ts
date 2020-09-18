import { ICustomer } from "../common/ICustomer";

export class CustomerProvider {
    private data : ICustomer[] = [];

    constructor() {

    }

    public add(c:ICustomer) {
        this.data.push(c);
    }

    public get Count(): number{
        return this.data.length;
    }

    public get Items() :ICustomer[] {
        return [...this.data];
    }
}