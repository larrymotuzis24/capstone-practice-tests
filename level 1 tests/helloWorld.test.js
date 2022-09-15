const helloWorld = require('../level 1 js/helloWorld');

describe('helloWorld', () => {
    test('returns a string "Hello World"', () => {
        expect(helloWorld('World')).toBe('Hello World')
    })
});