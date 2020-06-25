"use strict";
function createCircle(r) {
    return {
        radius: r
    };
}
function joinCircles(c, d, ...o) {
    let allRad = 0;
    for (let c of o) {
        allRad += c.radius;
    }
    return {
        radius: c.radius + d.radius + allRad
    };
}
let c1 = {
    radius: 30
};
let c2 = {
    radius: 100
};
let c3 = createCircle(200);
let c4 = joinCircles(c1, c2, c3, createCircle(10), { radius: 20 });
console.log("C4 Radius : " + c4.radius);
