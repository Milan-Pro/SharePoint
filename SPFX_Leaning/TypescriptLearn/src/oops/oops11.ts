// Static functions

class Calculator {
    public static n = 10;

    public static add(n1: number, n2: number) : number {
        return n1 + n2;
    }

    public change(i: number) {
        Calculator.n = i;
    }
}

let calc1 = new Calculator();
let calc2 = new Calculator();

calc1.change(100);
calc2.change(200);
