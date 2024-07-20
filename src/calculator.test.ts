import { Calculator } from './calculator';

describe('Calculator', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(calc.add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(calc.subtract(5, 2)).toBe(3);
    });

    test('multiplies 2 * 3 to equal 6', () => {
        expect(calc.multiply(2, 3)).toBe(6);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });
});