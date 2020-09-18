//to run the test file you need to set "test": "jest --verbose" in package.json
//then run with npm test also extensin installed run the file.
var ml = require('../funclib');

describe('Testing MathLibrary',() => {
    test('Add 1 and 2 to give 3',() =>{
        let r = ml.Add(1,2);

        expect(r).toBe(3);
    });

    test('Multiple 2 and 3 to give 6', ()=> {
        let r = ml.Mult(2,3);

        expect(r).toBe(6);
    });

    test('Test exponent of 2 and 3 to 8',() => {
        let r = ml.Power(2,3);

        expect(r).toBe(8);
    });
});