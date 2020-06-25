// Example of inheritance in Interfaces and Classes

interface IPerson {
    uid: number;
    name: string;
}

interface IEmployee extends IPerson {
    empid: number;
    dept: string;
    role: string;
    ctc: number;
    leaves: number;
}

class Employee  {
    private empinfo : IEmployee;

    constructor(emp : IEmployee) {
        this.empinfo = emp;
    }

    public get CTC() : number {
        return this.empinfo.ctc;
    }

    public toString() : string {
        return `Employee Info -
        EMPID : ${ this.empinfo.empid }
        NAME  : ${ this.empinfo.name }
        DEPT  : ${ this.empinfo.dept }
        ROLE  : ${ this.empinfo.role }
        `;
    }
}

let shyam : IEmployee = {
    uid : 40451265841,
    name : "Shyam",
    dept: "Finance",
    role: "Director",
    empid: 2001,
    ctc: 25.34,
    leaves: 25
};

let em1 = new Employee(shyam);

console.log(em1.toString());




