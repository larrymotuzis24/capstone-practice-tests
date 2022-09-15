const multiply = require('../level 1 js/multiply');

describe('multiply', ()=> {
    test('multiplying 2 and 6 should return 12', ()=> {
        expect(multiply(2, 6)).toEqual(12)
    })
});