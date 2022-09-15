const letterCounter = require('../level 2 js /letterCounter');

test('should return the correct number of letters in the string', () => {
    expect(letterCounter('helloWorld')).toBe(10)
});