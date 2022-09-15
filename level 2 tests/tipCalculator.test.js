const tipCalculator = require('../level 2 js /tipCalculator');

describe('tipCalculator', ()=> {
    test('should calculate the total tip', ()=> {
        expect(tipCalculator(20, .15)).toEqual(23)

    })
    test('should return the total if no tipPercentage is passed in', ()=> {
        expect(tipCalculator(20)).toEqual(20)

    })
});