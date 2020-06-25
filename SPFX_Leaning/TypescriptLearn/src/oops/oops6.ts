class Circle {
    constructor(private id: string, private radius : number) {

    }

    public get ID() : string {
        return this.id;
    }

    public get Radius() : number {
        return this.radius;
    }

    public set Radius(r: number) {
        if(r > 0) {
            this.radius = r;
        }
    }

    public getArea() : number {
        return 3.14 * this.radius * this.radius;
    }
}

let mycircle = new Circle("1111", 10);

mycircle.Radius = 50;

console.log("Circle info -")
console.log(mycircle.ID);
console.log(mycircle.Radius);
console.log(mycircle.getArea());


