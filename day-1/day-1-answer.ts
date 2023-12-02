// Part 1 Answer Values
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;
const digitMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export const findFirstDigit = (input: string): string => {
  const matches = [...input.matchAll(regex)];
  const firstDigit = matches[0]?.[1];
  if (firstDigit in digitMap) {
    return digitMap[firstDigit];
  }
  return firstDigit;
};
export const findLastDigit = (input: string): string => {
  const matches = [...input.matchAll(regex)];
  const lastDigit = matches[matches.length - 1]?.[1];
  if (lastDigit in digitMap) {
    return digitMap[lastDigit];
  }

  return lastDigit;
};
export const getLineValue = (input: string): number => {
  return input
    .split("\n")
    .map((line) => {
      const firstDigit = findFirstDigit(line);
      const lastDigit = findLastDigit(line);
      console.log(`Line: ${line}`);
      console.log(`First: ${firstDigit}`);
      console.log(`Last:${lastDigit}`);
      console.log("---");
      return firstDigit + lastDigit;
    })
    .reduce((acc, curr) => acc + parseInt(curr), 0);
};
