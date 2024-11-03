const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
})

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
})

test("prime(5) should be true", () => {
    expect(lib.prime(5)).toBe(true);
})

test("prime(8) should be false", () => {
    expect(lib.prime(8)).toBe(false);
})

test("fact(16) should be -1", () => {
    expect(lib.fact(16)).toBe(-1);
})

test("fact(5) should be 120", () => {
    expect(lib.fact(5)).toBe(120);
})