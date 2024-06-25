import { describe, expect, test } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("multiple of 3 give Fizz", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  test("multiple of 5 give Buzz", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
  test("multiple of 3 and 5 give FizzBuzz", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
});
