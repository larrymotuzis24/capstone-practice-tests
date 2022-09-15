const isNumber = require('../level 1 js/isNumber');

describe('isNumber function', () => {
    test('properly checks that the value passed in is a integer', () => {
        expect(isNumber(2)).toBe(true)
    });
    
    test("isInteger fails for non-integer value", () => {
        expect(isNumber('hello world')).toBe(false);
    });

})
