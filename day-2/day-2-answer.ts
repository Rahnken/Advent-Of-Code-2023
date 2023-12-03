import { readFile } from "fs/promises";

export type GameDice = {
  red: number;
  blue: number;
  green: number;
};
type Game = {
  id: number;
  selections?: string[];
  confirmedDice?: GameDice;
};

const exampleText = await readFile("day-2/example.txt", { encoding: "utf-8" });

const realText = await readFile("day-2/real.txt", { encoding: "utf-8" });

export const diceToCheck: GameDice = {
  red: 12,
  blue: 14,
  green: 13,
};

export const cleanInput = (input: string): Game[] => {
  return input.split("\n").map((line) => {
    const changedline = line.replace(/(Game )/g, "").split(":");
    const game = {
      id: parseInt(changedline[0]),
      selections: changedline[1].split(";"),
    };
    // console.log(game);
    return game;
  });
};
const currentDice: GameDice = {
  red: 0,
  blue: 0,
  green: 0,
};
export const setConfirmedDice = (game: Game): Game => {
  return game?.selections?.map((selection) => {
    const dices = selection.split(",");
    const updatedDice: GameDice = { ...currentDice }; // Create a new object to store the updated dice counts
    for (let dice of dices) {
      const [count, color] = dice.trim().split(" ");
      if (updatedDice[color] < parseInt(count)) {
        updatedDice[color] = parseInt(count);
      }
    }
    let updatedGame: Game = {
      ...game,
      confirmedDice: updatedDice,
    };
    return updatedGame;
  });
};

export const findValidGameId = (input: Game[]): number => {
  const validGameId: number[] = [];
  for (let game of input) {
    const { red, blue, green } = game.confirmedDice || {
      red: 0,
      blue: 0,
      green: 0,
    };
    console.log(red, blue, green);
    if (
      red === diceToCheck.red &&
      blue === diceToCheck.blue &&
      green === diceToCheck.green
    ) {
      validGameId.push(game.id);
    }
  }

  const sum = validGameId.reduce((acc, curr) => acc + curr, 0);
  return 0;
};

const exampleGames = cleanInput(exampleText);
const realGames = cleanInput(realText);

const exampleGamesWithDice = setConfirmedDice(exampleGames[0]);
