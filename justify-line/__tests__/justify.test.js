const { justifyText } = require('../justify');

describe('justifyText()', () => { 
    test('if passed one word it returns the correct number of spaces', () => {
        expect(justifyText('august', 8)).toBe('  august');
        expect(justifyText('egg',10)).toBe('       egg');
        expect(justifyText('planet', 6)).toBe('planet');
    });
    test('if passed multiple words, returns the string with the correct number of spaces ', () => {
        expect(justifyText('howdy all',9 )).toBe('howdy all');
        expect(justifyText('vado in Portogallo', 20)).toBe('vado  in  Portogallo');
        expect(justifyText('vado in Corea', 16)).toBe('vado   in  Corea');
        expect(justifyText('egg egg egg egg', 16)).toBe('egg  egg egg egg')
    });
    test('should return String exceeds maximum line length if the string is larger than the max length', () => {
        expect(justifyText('my lovely string', 10) ).toBe('String exceeds maximum line length');
    });
 })