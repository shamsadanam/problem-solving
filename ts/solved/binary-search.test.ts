import { describe, expect, test } from "vitest";

const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

describe("binarySearch", () => {
  test("returns index of target when found", () => {
    expect(binarySearch([3, 7, 12, 15, 18, 24, 29, 33, 37, 42], 29)).toBe(6);
  });

  test("returns -1 when target not found", () => {
    expect(binarySearch([3, 7, 12, 15, 18, 24, 29, 33, 37, 42], 40)).toBe(-1);
  });

  test("returns index of target at the beginning of the array", () => {
    expect(binarySearch([3, 7, 12, 15, 18, 24, 29, 33, 37, 42], 3)).toBe(0);
  });

  test("returns index of target at the end of the array", () => {
    expect(binarySearch([3, 7, 12, 15, 18, 24, 29, 33, 37, 42], 42)).toBe(9);
  });

  test("returns index of first occurrence when target is repeated", () => {
    expect(binarySearch([3, 7, 12, 12, 15, 18, 24, 29, 33, 37, 42], 12)).toBe(
      2,
    );
  });

  test("returns -1 for empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  test("returns index of single element in array", () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  test("handles negative numbers correctly", () => {
    expect(binarySearch([-10, -6, -1, 0, 3, 5], 0)).toBe(3);
  });

  test("works with large array", () => {
    const largeArray = [];
    for (let i = 0; i < 100000; i++) {
      largeArray.push(i);
    }
    expect(binarySearch(largeArray, 50000)).toBe(50000);
  });
});
