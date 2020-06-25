// func2.ts

function Add(n1: number, n2: number, ...nos : number[]) : number {

    let s = n1 + n2;

    if(nos.length > 0) {
        for(let n of nos) {
            s += n;
        }
    }

    return s;
}

let morenos = [3,4,5,6,7,8,9,10];

let r = Add(1,2,...morenos);

console.log("Result : " + r);