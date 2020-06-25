const PI : number = 22/7;

class Cylinder {
    constructor(private radius : number, private height: number) {
    }

    public get Radius() : number {
        return this.radius;
    }

    public get Height() : number {
        return this.height;
    }

    public get Volume() : number {
        return PI * (this.radius * this.radius) * this.height;
    }

    public get SurfaceArea() : number {
        return (2 * PI * this.radius * this.height) + (2* PI * (this.radius * this.radius));
    }
}

let cy1 = new Cylinder(40,120);

console.log(`Cylinder Info -
    Radius : ${ cy1.Radius} 
    Height : ${ cy1.Height }
    Surface Area : ${ cy1.SurfaceArea }
    Volume : ${ cy1.Volume }
`);