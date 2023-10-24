const {queueTime} = require('../supermarket')

describe('queueTime', () => { 
    test('should return a number', () => {
        expect(typeof queueTime([2,2,2], 1)).toBe('number');
    });
    test('should return the length of time for one customer and one till', () => {
        expect(queueTime([5], 1)).toBe(5);
    });
    test('should return the length of time for multiple customers and one till', () => {
        expect(queueTime([5, 5, 10], 1)).toBe(20);
    });
    test('should return the correct time for multiple customers with immediate access to multiple tills', () => {
        expect(queueTime([4,6,2], 3)).toBe(6);
    });
    test('should return the correct time for multiple customers without immediate access given multiple tills', () => {
        expect(queueTime([2, 3, 10], 2)).toBe(12);
        expect(queueTime([7, 4, 6, 2], 2)).toBe(10);
        expect(queueTime([10, 5, 17, 3, 5, 4], 3)).toBe(17);
    });
 })