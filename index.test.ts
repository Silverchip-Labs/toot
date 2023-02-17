import {coolMap, coolFilter, coolReduce} from "./index";

describe("coolMap", () => {
    it("should map an array", () => {
        const result = coolMap([1, 2, 3], (item) => item * 2);
        expect(result).toEqual([2, 4, 6]);
    });
});

describe("coolFilter", () => {
    it("returns an array", () => {
        expect(coolFilter([], () => true)).toBeInstanceOf(Array);
    })
    it("filters an array", () => {
        const fn = (el) => !!(el % 2);
        const result = coolFilter([1, 2, 3], fn);
        expect(result).toEqual([1, 3]);
    })
})

describe("coolReduce", () => {
    it('should return the sum of numbers when reducing a sum function on a number array', () => {
        const actual = coolReduce([1, 2], (sum, n) => sum + n, 0);
        const expected = 3;
        expect(actual).toEqual(expected);
    });
    it('should use first element of collection as initial value if no accumulator is given', () => {
        const actual = coolReduce([1, 2, 3], (sum, n) => sum + n);
        const expected = 6;
        expect(actual).toEqual(expected);
    });
})