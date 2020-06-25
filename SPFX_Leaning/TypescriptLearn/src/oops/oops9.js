// Example of inheritance in Interfaces and Classes
class Employee {
    constructor(emp) {
        this.empinfo = emp;
    }
    get CTC() {
        return this.empinfo.ctc;
    }
    toString() {
        return `Employee Info -
        EMPID : ${this.empinfo.empid}
        NAME  : ${this.empinfo.name}
        DEPT  : ${this.empinfo.dept}
        ROLE  : ${this.empinfo.role}
        `;
    }
}
let shyam = {
    uid: 40451265841,
    name: "Shyam",
    dept: "Finance",
    role: "Director",
    empid: 2001,
    ctc: 25.34,
    leaves: 25
};
let em1 = new Employee(shyam);
console.log(em1.toString());
