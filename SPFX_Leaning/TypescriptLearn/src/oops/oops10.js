// Abstract class example
class BoxShape {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    get Area() {
        return this.length * this.breadth;
    }
    get Length() {
        return this.length;
    }
    get Breadth() {
        return this.breadth;
    }
}
class Square extends BoxShape {
    constructor(side) {
        super(side, side);
    }
}
class Reactangle extends BoxShape {
}
let sqr1 = new Square(10);
let rect1 = new Reactangle(100, 50);
console.log(sqr1.Area);
console.log(`${rect1.Length} x ${rect1.Breadth} = ${rect1.Area} `);
