const woof = require('../level 2 js /woof');

describe('woof', () => {
    test('returns the number of woofs passed into the function', () => {
        expect(woof(3)).toBe('woof woof woof')
    })
    test('should return null when not given a string', () => {
        expect(woof('da')).toEqual(null)
    })
}); 