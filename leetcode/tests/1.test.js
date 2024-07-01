import { expect, test } from "vitest";
import { twoSum } from "../1-twoSum";

test("run twoSum with [2,7,11,15]", () => {
  expect(twoSum([2, 7, 11, 15], 9).sort((a, b) => a - b)).toStrictEqual([0, 1]);
});
test("run twoSum with [3,2,4]", () => {
  expect(twoSum([3, 2, 4], 6).sort((a, b) => a - b)).toStrictEqual([1, 2]);
});

test("run twoSum with [3,3]", () => {
  expect(twoSum([3, 3], 6).sort((a, b) => a - b)).toStrictEqual([0, 1]);
});
