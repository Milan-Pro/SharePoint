// Abstract class example

interface IBox {
    Length: number;
    Breadth: number;
    Area : number;
}

abstract class CircularShape {
    constructor(protected radius : number) {

    }

    area() : number {
        return (22/7) * this.radius * this.radius;
    }
}

abstract class CircularVolumeBody extends CircularShape {
    constructor(radius : number, private height: number) {
        super(radius);
    }

    volume() : number {
        return ((22/7) * this.radius * this.radius) * this.height;
    }
}

class Cylinder1 extends CircularVolumeBody{

}
class ObliqueCylinder extends CircularVolumeBody {

}

let cyl2 = new Cylinder1(10,40);
cyl2.volume();

class Circle1 extends CircularShape {

}

class Ellipse extends CircularShape {
    constructor(private xradius: number, private yradius : number) {
        super(xradius);

    }

    area() : number {
        // apply the ellipse formula for area
        return (22/7) * this.xradius * this.yradius;
    }
}


abstract class BoxShape implements IBox {
    constructor(private length : number, private breadth : number) {

    }

    public get Area() : number {
        return this.length * this.breadth;
    }

    public get Length() : number {
        return this.length;
    }

    public get Breadth() : number {
        return this.breadth;
    }
}

class Square extends BoxShape {
   constructor(side: number) {
       super(side,side);
   }
}

class Reactangle extends BoxShape {
}

let sqr1 = new Square(10);
let rect1 = new Reactangle(100,50);

console.log(sqr1.Area);
console.log(`${ rect1.Length} x ${ rect1.Breadth} = ${ rect1.Area} `);