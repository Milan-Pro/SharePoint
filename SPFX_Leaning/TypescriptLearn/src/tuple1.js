// Tuple
function getCustomer(id) {
    // do some search
    var custname = "XYZ";
    return [id, custname];
}
var pair;
pair = [1001, "ABC Inc", false];
console.log(pair[0] + " : " + pair[1]);
var result = getCustomer(2001);
console.log(result);
