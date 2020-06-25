// Main File of the Node Project
var os = require('os');
var ic = require('instacrypt');
var Person = require('./Person');
​
// Display Information about OS
console.log("Platform : " + os.platform());
console.log("Rel : " + os.release());
console.log("Arch : " + os.arch());
console.log("MEMORY : " + os.totalmem());
​
var name = "VIJAY NATRAJAN";
​
var encname = ic().toHashSync(name);
​
console.log("English : "  + name);
console.log("Hash : " + encname);
​
var p1 = new Person(1001,"Ram");
​
console.log(p1.getDetails());
