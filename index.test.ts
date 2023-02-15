import { coolMap } from "./index";

describe("coolMap", () => {
    it("should map an array", () => {
        const result = coolMap([1, 2, 3], (item) => item * 2);
        expect(result).toEqual([2, 4, 6]);
    });
});

