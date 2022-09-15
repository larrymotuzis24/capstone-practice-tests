const subtract = require('../level 1 js/subtract');

describe('subtract', () => {
    test('subtracts two numbers and returns the remainder', () => {
        expect(subtract(1, 2)).toEqual(-1)
    });
});