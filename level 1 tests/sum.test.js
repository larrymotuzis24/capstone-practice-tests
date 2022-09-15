const sum = require('../level 1 js/sum');

describe('sum', ()=> {
    test('properly adds two numbers', () => {
        expect(sum(1, 2)).toEqual(3)
    })
});