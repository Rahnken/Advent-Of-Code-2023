const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
export const findFirstDigit = (input: string): string => {
  const firstDigit = input.split("").find((char) => numbers.includes(char));
  return firstDigit!;
};
export const findLastDigit = (input: string): string => {
  const lastDigit = input
    .split("")
    .reverse()
    .find((char) => numbers.includes(char));
  return lastDigit!;
};
export const getLineValue = (input: string): number => {
  return input
    .split("\n")
    .map((line) => {
      const firstDigit = findFirstDigit(line);
      const lastDigit = findLastDigit(line);
      console.log(firstDigit, lastDigit);
      return firstDigit + lastDigit;
    })
    .reduce((acc, curr) => acc + parseInt(curr), 0);
};
