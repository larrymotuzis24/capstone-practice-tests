const includesLetter = require('../level 1 js/includesLetter');

describe('includesLetter', () => {
    test('returns true if the letter passed in is inside the string argument', () => {
        expect(includesLetter('hello world', 'w')).toBe(true)
    })
    test('returns false if the letter passed in is not in the string argument', () => {
        expect(includesLetter('q', 'helloWorld')).toBe(false)
    })

});
