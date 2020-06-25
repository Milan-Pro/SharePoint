class Vehicle {
    protected kms : number = 0;

    constructor(public make :string, public model: string, public regno :string) {
    }

    public Run(distance: number) {
        this.ShiftGear();

        this.kms += distance;
    }

    protected ShiftGear() {

    }

    public get Kms() : number {
        return this.kms;
    }
}

interface ISportsVehicle{

}

interface INitroPower {

}

class Car extends Vehicle implements ISportsVehicle, INitroPower {
    constructor(make: string, model : string, rno: string, public color: string) {
        super(make,model,rno);

    }

    public MoveCar() {
        this.ShiftGear();
    }
}

let car1 = new Car("Maruti","Swift","DL3C-1234","Red");

let v1 = new Vehicle("Ford","Escort","MH01-1234");

v1.Run(25);
v1.Run(100);

console.log(`Vehicle has run : ${ v1.Kms } kms`);
