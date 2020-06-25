"use strict";
// Enumeration Demo
var ColorTypes;
(function (ColorTypes) {
    ColorTypes[ColorTypes["Red"] = 0] = "Red";
    ColorTypes[ColorTypes["Blue"] = 1] = "Blue";
    ColorTypes[ColorTypes["Green"] = 2] = "Green";
})(ColorTypes || (ColorTypes = {}));
;
let color = ColorTypes.Red;
console.log(color);
console.log(ColorTypes[color]);
