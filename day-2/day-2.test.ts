import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import { cleanInput, setConfirmedDice } from "./day-2-answer";
import { exampleGames } from "./extraStuff";

const exampleText = await readFile("day-2/example.txt", { encoding: "utf-8" });

const realText = await readFile("day-2/real.txt", { encoding: "utf-8" });

describe.skip("Can read Files", () => {
  it("should read example.txt", () => {
    console.log(exampleText);
    expect(true).toBe(true);
  });
  it("should read real.txt", () => {
    console.log(realText);
    expect(true).toBe(true);
  });
});

describe("Check if the cleanInput function works", () => {
  it("should return a game object", () => {
    expect(cleanInput(exampleText)).toStrictEqual(exampleGames);
  });
});

describe("Check for game informaton", () => {
  it.skip("should return a game object", () => {
    expect(setConfirmedDice(cleanInput(exampleText)[0])).toBe(false);
  });
});
