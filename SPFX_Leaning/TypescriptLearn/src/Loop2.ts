// foreach loop

let country : string = "I N D I A";

let letters : string[] = country.split(' ');

/*
letters.forEach(function(a) {
    console.log(a);
});

*/

for(let l of letters) {
    console.log(l);
}