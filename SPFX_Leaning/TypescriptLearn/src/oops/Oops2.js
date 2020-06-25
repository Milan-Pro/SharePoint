function createCircle(r) {
    return {
        radius: r
    };
}
function joinCircles(c, d) {
    var o = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        o[_i - 2] = arguments[_i];
    }
    var allRad = 0;
    for (var _a = 0, o_1 = o; _a < o_1.length; _a++) {
        var c_1 = o_1[_a];
        allRad += c_1.radius;
    }
    return {
        radius: c.radius + d.radius + allRad
    };
}
var c1 = {
    radius: 30
};
var c2 = {
    radius: 100
};
var c3 = createCircle(200);
var c4 = joinCircles(c1, c2, c3, createCircle(10), { radius: 20 });
console.log("C4 Radius : " + c4.radius);
