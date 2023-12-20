import { Game, GameDice } from "./types";

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
      confirmedDice: {
        red: 0,
        blue: 0,
        green: 0,
      },
    };
    return game;
  });
};
const currentDice: GameDice = {
  red: 0,
  blue: 0,
  green: 0,
};
export const setConfirmedDice = (game: Game): Game => {
  if (!game || !game.selections) {
    throw new Error("Invalid game or selections");
  }
  let updatedGame: Game = { ...game };
  // Map over the selections and update the confirmedDice in the game
  game.selections.forEach((selection) => {
    const dices = selection.split(",");
    const updatedDice: GameDice = { ...updatedGame.confirmedDice }; // Create a new object to store the updated dice counts
    for (let dice of dices) {
      const [count, colour] = dice.trim().split(" ");
      if (updatedDice[colour] < parseInt(count)) {
        updatedDice[colour] = parseInt(count);
      }
    }
    updatedGame = {
      ...updatedGame,
      confirmedDice: updatedDice,
    };
  });
  return updatedGame;
};

export const findValidGameIds = (input: Game[]): number[] => {
  const validGameId: number[] = [];
  for (let game of input) {
    const { red, blue, green } = game.confirmedDice;
    if (
      red <= diceToCheck.red &&
      blue <= diceToCheck.blue &&
      green <= diceToCheck.green
    ) {
      validGameId.push(game.id);
    }
  }
  return validGameId;
};

export const sumOfValidGames = (input: number[]): number => {
  return input.reduce((acc, curr) => acc + curr, 0);
};

export const findPowerOfCubes = (input: Game[]): number[] => {
  let powerOfCubes: number[] = [];
  for (let game of input) {
    const { red, blue, green } = game.confirmedDice;
    const power: number = red * blue * green;
    powerOfCubes.push(power);
  }
  return powerOfCubes;
};
