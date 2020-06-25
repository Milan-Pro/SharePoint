"use strict";
let x = 0;
for (let i = 0, y = 0, z = 0; i < 10; i++, x++) {
    console.log(i);
}
x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}
x = 11;
do {
    console.log(x);
} while (x <= 10);
