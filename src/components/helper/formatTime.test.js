import { addLeadingZero } from './formatTime';

describe("addLeadingZero", () => {
    it('test_single_digit_number', () => {
        expect(addLeadingZero(5)).toBe('05');
    });
    it('test_double_digit_number', () => {
        expect(addLeadingZero(15)).toBe('15');
    });
    it('test_string_input', () => {
        expect(addLeadingZero('5')).toBe('05');
    });
    it('test_negative_number', () => {
        expect(addLeadingZero(-5)).toBe('-5');
    });
    it('test_number_greater_than_99', () => {
        expect(addLeadingZero(100)).toBe('100');
    });
    it('test_non_numeric_input', () => {
        expect(addLeadingZero('abc')).toBe('abc');
    });
})
