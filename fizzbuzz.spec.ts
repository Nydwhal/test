import { describe, expect, test } from "@jest/globals";
import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("fizzbuzz", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
});
