import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import { findFirstDigit, findLastDigit, getLineValue } from "./day-1-answer";

const exampleText = await readFile("day-1/example.txt", { encoding: "utf-8" });
const realText = await readFile("day-1/real.txt", { encoding: "utf-8" });

describe("First Digit Tests", () => {
  it("should find the first digit", () => {
    expect(findFirstDigit("1abc2")).toBe("1");
  });
});

describe("Last Digit Tests", () => {
  it("should find the last digit", () => {
    expect(findLastDigit("1abc2")).toBe("2");
  });
});

describe("Accumulator Tests", () => {
  it("should find the sum of the first and last digits", () => {
    expect(getLineValue(exampleText)).toBe(142);
  });
  it.only("should find the sum of the first and last digits", () => {
    expect(getLineValue(realText)).toBe(142);
  });
});
