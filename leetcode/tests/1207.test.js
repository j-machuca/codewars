import { expect, test } from "vitest";
import { uniqueOccurrences } from "../1207-uniqueNumberofOccurrences";

test("Check the Unique number of occurences for the given array [1,2,2,1,1,3]", () => {
  expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});
test("Check the Unique number of occurences for the given array [1,2]", () => {
  expect(uniqueOccurrences([1, 2])).toBe(false);
});
test("Check the Unique number of occurences for the given array [-3,0,1,-3,1,1,1,-3,10,0]", () => {
  expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});
