const { sortString } = require('../sort-string');

describe('sortString', () => { 
    test('should return an empty string when passed an empty string', () => {
        expect(sortString('')).toBe('');
    });
    test('should return the string in the correct order', () => {
        expect(sortString("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
        expect(sortString("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
    });
 })