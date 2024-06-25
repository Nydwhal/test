export const fizzbuzz = (number: number): string => {
  if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  }
};
