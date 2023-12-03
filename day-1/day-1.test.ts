import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import { findFirstDigit, findLastDigit, getLineValue } from "./day-1-answer";

const exampleText = await readFile("day-1/example.txt", { encoding: "utf-8" });
const exampleText2 = await readFile("day-1/example2.txt", {
  encoding: "utf-8",
});
const realText = await readFile("day-1/real.txt", { encoding: "utf-8" });

describe.skip("Can read Files", () => {
  it("should read example.txt", () => {
    console.log(exampleText);
    expect(true).toBe(true);
  });
  it("should read example2.txt", () => {
    console.log(exampleText2);
    expect(true).toBe(true);
  });
  it("should read real.txt", () => {
    console.log(realText);
    expect(true).toBe(true);
  });
});

describe.skip("First Digit Tests", () => {
  it("should find the first digit", () => {
    expect(findFirstDigit("1abc2")).toBe("1");
  });
});

describe.skip("Last Digit Tests", () => {
  it("should find the last digit", () => {
    expect(findLastDigit("1abc2")).toBe("2");
  });
});

describe.skip("Accumulator Tests", () => {
  it("should find the sum of the first and last digits", () => {
    expect(getLineValue(exampleText)).toBe(142);
  });
  it("should find the sum of the first and last digits", () => {
    expect(getLineValue(realText)).toBe(142);
  });
});
