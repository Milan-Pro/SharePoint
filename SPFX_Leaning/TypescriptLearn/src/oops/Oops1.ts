interface IAddress {
    houseNo: string;
    street: string;
    locality: string;
    zipcode: number;
}

interface IStudent {
    rollNo: number;
    readonly name: string;
    class: string;
    section: string;
    email?: string;
    address?: IAddress;
}

let ram : IStudent  = {
    rollNo: 1,
    name: "Ram Kumar",
    class: "V",
    section: "A"
};

console.log(`
    Student Information
    --------------------
    Roll No: ${ ram.rollNo } 
    Name   : ${ ram.name }
    Class  : ${ ram.class }
    Section: ${ ram.section }
    `);