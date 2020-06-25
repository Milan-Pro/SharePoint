class Vehicle {
    constructor(make, model, regno) {
        this.make = make;
        this.model = model;
        this.regno = regno;
        this.kms = 0;
    }
    Run(distance) {
        this.ShiftGear();
        this.kms += distance;
    }
    ShiftGear() {
    }
    get Kms() {
        return this.kms;
    }
}
let v1 = new Vehicle("Ford", "Escort", "MH01-1234");
v1.Run(25);
v1.Run(100);
console.log(`Vehicle has run : ${v1.Kms} kms`);
