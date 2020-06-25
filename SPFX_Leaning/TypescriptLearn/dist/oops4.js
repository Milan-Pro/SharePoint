"use strict";
let s1 = {
    side: 34,
    getArea: function (factor) {
        return (this.side * this.side) + factor;
    }
};
console.log(`SQUARE INFOMATION
             -----------------
             Side: ${s1.side}
             Area: ${s1.getArea(30)} sq units
`);
