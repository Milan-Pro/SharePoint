interface ICircle {
    radius: number;
}

function createCircle(r: number) : ICircle {
    return {
        radius: r
    };
}

function joinCircles(c: ICircle, d: ICircle, ...o: ICircle[]) : ICircle {
    let allRad = 0;

    for(let c of o) {
        allRad += c.radius;
    }

    return {
        radius: c.radius + d.radius + allRad 
    };
}

let c1 : ICircle = {
    radius: 30
};

let c2 : ICircle = {
    radius: 100
};

let c3: ICircle = createCircle(200);

let c4: ICircle = joinCircles(c1, c2, c3, createCircle(10), { radius: 20 });

console.log("C4 Radius : " + c4.radius);



