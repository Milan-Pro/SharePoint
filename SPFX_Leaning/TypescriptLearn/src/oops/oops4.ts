interface ISquare {
    side: number;
    getArea(factor: number): number;
}

let s1 : ISquare = {
    side: 34,
    getArea: function(factor: number) {
        return (this.side * this.side) + factor;
    }
}

console.log(`SQUARE INFOMATION
             -----------------
             Side: ${ s1.side }
             Area: ${ s1.getArea(30) } sq units
`);
