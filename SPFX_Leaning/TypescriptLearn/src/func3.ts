let sum1 = (a: number, b: number) : number => {
    return a + b;
}

let S = (a : number, b : number) : number => a + b;

function CallSomeFunc(f : (a : number, b : number) => number ) {
    f(3,4);
}

const v = (p1: boolean) : void => {
    console.log(p1);

};

function MakeComplexNumber(real : number, imag: number ) : [number,number] {
    return [real,imag];
}

let c = MakeComplexNumber(10,2);

let url : string = "bit.ly/dsds43e";

const PI : number = 3.14;


