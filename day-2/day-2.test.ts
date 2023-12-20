import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import {
  cleanInput,
  findPowerOfCubes,
  findValidGameIds,
  setConfirmedDice,
  sumOfValidGames,
} from "./day-2-answer";
import { exampleGames } from "./extraStuff";
import { Game } from "./types";

const exampleText = await readFile("example.txt", { encoding: "utf-8" });

const realText = await readFile("real.txt", { encoding: "utf-8" });

describe("File setup", () => {
  describe("Can read Files", () => {
    it("should read example.txt", () => {
      expect(true).toBe(true);
    });
    it("should read real.txt", () => {
      expect(true).toBe(true);
    });
  });
});

describe("Day 2 - Helper Function Tests", () => {
  describe("Check if the cleanInput function works", () => {
    it("should return a game object", () => {
      expect(cleanInput(exampleText)).toStrictEqual(exampleGames);
    });
  });
  describe("Check if the setConfirmedDice function works", () => {
    it("should return a game object with confirmed dice", () => {
      const exampleGamesWithDice: Game[] = exampleGames.map((game) => {
        return setConfirmedDice(game);
      });
      expect(exampleGamesWithDice[0].confirmedDice).toStrictEqual({
        red: 4,
        blue: 6,
        green: 2,
      });
    });
  });
});

describe("Day 2 - Part 1", () => {
  describe("Check for proper example answer", () => {
    it("should return 8 as the answer for the example", () => {
      const exampleGames = cleanInput(exampleText);
      const exampleGamesWithDice: Game[] = exampleGames.map((game) => {
        return setConfirmedDice(game);
      });
      const validGameIds = findValidGameIds(exampleGamesWithDice);
      expect(sumOfValidGames(validGameIds)).toBe(8);
    });
  });
  describe("Check for real answer", () => {
    it("should return 2207 as the real answer", () => {
      const realGames = cleanInput(realText);
      const realGamesWithDice: Game[] = realGames.map((game) => {
        return setConfirmedDice(game);
      });
      const validGameIds = findValidGameIds(realGamesWithDice);
      expect(sumOfValidGames(validGameIds)).toBe(2207);
    });
  });
});

describe("Day 2 - Part 2", () => {
  describe("Check for proper example answer", () => {
    it("should return 8 as the answer for the example", () => {
      const exampleGames = cleanInput(exampleText);
      const exampleGamesWithDice: Game[] = exampleGames.map((game) => {
        return setConfirmedDice(game);
      });
      const validGameIds = findPowerOfCubes(exampleGamesWithDice);
      expect(sumOfValidGames(validGameIds)).toBe(2286);
    });
  });
  describe("Check for real answer", () => {
    it("should return 2207 as the real answer", () => {
      const realGames = cleanInput(realText);
      const realGamesWithDice: Game[] = realGames.map((game) => {
        return setConfirmedDice(game);
      });
      const validGameIds = findPowerOfCubes(realGamesWithDice);
      expect(sumOfValidGames(validGameIds)).toBe(62241);
    });
  });
});
