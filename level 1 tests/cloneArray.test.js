const cloneArray = require('../level 1 js/cloneArray');



test('properly clones an array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})