export type GameDice = {
  red: number;
  blue: number;
  green: number;
};
export type Game = {
  id: number;
  selections?: string[];
  confirmedDice: GameDice;
};
