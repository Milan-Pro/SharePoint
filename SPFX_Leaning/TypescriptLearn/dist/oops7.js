"use strict";
const PI = 22 / 7;
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    get Radius() {
        return this.radius;
    }
    get Height() {
        return this.height;
    }
    get Volume() {
        return PI * (this.radius * this.radius) * this.height;
    }
    get SurfaceArea() {
        return (2 * PI * this.radius * this.height) + (2 * PI * (this.radius * this.radius));
    }
}
let cy1 = new Cylinder(40, 120);
console.log(`Cylinder Info -
    Radius : ${cy1.Radius} 
    Height : ${cy1.Height}
    Surface Area : ${cy1.SurfaceArea}
    Volume : ${cy1.Volume}
`);
