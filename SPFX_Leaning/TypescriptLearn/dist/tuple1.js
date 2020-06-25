"use strict";
// Tuple
function getCustomer(id) {
    // do some search
    let custname = "XYZ";
    return [id, custname];
}
let pair;
pair = [1001, "ABC Inc", false];
console.log(pair[0] + " : " + pair[1]);
let result = getCustomer(2001);
console.log(result);
