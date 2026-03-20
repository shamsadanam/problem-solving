import { log } from "@/utils/log";
import { describe, it, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;

  if (len < 2) return [];

  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [];
}

// Test cases
describe("Two Sum Problem", () => {
  it("should find indices of [2, 7, 11, 15] for target 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should find indices of [3, 2, 4] for target 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should handle cases where no solution exists", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});

// Console Logs
log(twoSum, [2, 7, 11, 15], 9);
log(twoSum, [2, 7, 11, 15], 26);
log(twoSum, [3, 2, 4], 6);
log(twoSum, [3, 3], 6);
