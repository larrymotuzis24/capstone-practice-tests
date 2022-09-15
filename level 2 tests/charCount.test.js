const charCount = require('../level 2 js /charCount');

describe('charCount', () => {
    test('should return the corrent count of the letter passed into the arugument', () => {
        expect(charCount('hello world', 'l')).toBe(3)
    })
});