class Circle {
    constructor(id, radius) {
        this.id = id;
        this.radius = radius;
    }
    get ID() {
        return this.id;
    }
    get Radius() {
        return this.radius;
    }
    set Radius(r) {
        if (r > 0) {
            this.radius = r;
        }
    }
    getArea() {
        return 3.14 * this.radius * this.radius;
    }
}
let mycircle = new Circle("1111", 10);
mycircle.Radius = 50;
console.log("Circle info -");
console.log(mycircle.ID);
console.log(mycircle.Radius);
console.log(mycircle.getArea());
