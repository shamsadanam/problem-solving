import { describe, expect, test } from "vitest";
import containsDuplicate from "./contains-duplicate";

describe("containsDuplicate", () => {
  test("should return false for an empty array", () => {
    const arr: number[] = [];
    expect(containsDuplicate(arr)).toBe(false);
  });

  test("should return false for an array with no duplicates", () => {
    const arr = [1, 2, 3, 4];
    expect(containsDuplicate(arr)).toBe(false);
  });

  test("should return true for an array with one duplicate", () => {
    const arr = [1, 2, 3, 2];
    expect(containsDuplicate(arr)).toBe(true);
  });

  test("should return true for an array with multiple duplicates", () => {
    const arr = [1, 2, 3, 4, 5, 1, 6];
    expect(containsDuplicate(arr)).toBe(true);
  });

  test("should return true for an array with all elements the same", () => {
    const arr = [7, 7, 7, 7];
    expect(containsDuplicate(arr)).toBe(true);
  });

  test("should return false for a large array without duplicates", () => {
    const largeArray: number[] = [];
    for (let i = 0; i < 10000; i++) {
      largeArray.push(i);
    }
    expect(containsDuplicate(largeArray)).toBe(false);
  });

  test("should return true for a large array with one duplicate", () => {
    const largeArray: number[] = [];
    for (let i = 0; i < 10000; i++) {
      largeArray.push(i);
    }
    largeArray[5000] = 42;
    expect(containsDuplicate(largeArray)).toBe(true);
  });
});
