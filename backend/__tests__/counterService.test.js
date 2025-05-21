const CounterService = require('../counterService');

describe('CounterService', () => {
    let counter;

    beforeEach(() => {
        counter = new CounterService(5);
    });

    test('should initialize with given value', () => {
        expect(counter.get()).toBe(5);
    });

    test('should increment value', () => {
        expect(counter.increment()).toBe(6);
        expect(counter.get()).toBe(6);
    });

    test('should decrement value', () => {
        expect(counter.decrement()).toBe(4);
        expect(counter.get()).toBe(4);
    });
});
