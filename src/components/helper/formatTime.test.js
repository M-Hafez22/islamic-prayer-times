import { addLeadingZero, to12Format } from './formatTime';

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

describe("Format Hour in 12", () => {
    it('test_happy_path_24_with_leading_zero', () => {
        expect(to12Format('05:39')).toBe('05:39');
        expect(to12Format('12:00')).toBe('12:00');
        expect(to12Format('23:59')).toBe('11:59');
    });
    it('test_happy_path_24_without_leading_zero', () => {
        expect(to12Format('5:39')).toBe('05:39');
        expect(to12Format('12:0')).toBe('12:00');
        expect(to12Format('23:9')).toBe('11:09');
    });
    it('test_happy_path_12_with_leading_zero', () => {
        expect(to12Format('05:39')).toBe('05:39');
        expect(to12Format('12:00')).toBe('12:00');
        expect(to12Format('11:59')).toBe('11:59');
    });
    it('test_happy_path_12_without_leading_zero', () => {
        expect(to12Format('5:39')).toBe('05:39');
        expect(to12Format('12:0')).toBe('12:00');
        expect(to12Format('11:9')).toBe('11:09');
    });
    it('test_edge_case_00_00', () => {
        expect(to12Format('00:00')).toBe('12:00');
    });
    it('test_edge_case_00_59', () => {
        expect(to12Format('00:59')).toBe('12:59');
    });
})