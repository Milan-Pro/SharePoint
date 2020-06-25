// Tuple

function getCustomer(id : number) : [number,string] {
    // do some search
    let custname : string = "XYZ";

    return [id,custname];
}


let pair : [number, string, boolean];

pair = [1001,"ABC Inc",false];

console.log(pair[0] + " : " + pair[1]);

let result = getCustomer(2001);

console.log(result);

