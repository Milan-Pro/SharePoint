// Enumeration Demo

enum ColorTypes {
    Red,
    Blue,
    Green
};

let color : ColorTypes = <ColorTypes> ColorTypes.Red;

console.log(color);

console.log(ColorTypes[color]);