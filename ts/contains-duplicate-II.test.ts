import { describe, expect, it } from "vitest";
import containsNearbyDuplicate from "./contains-duplicate-II";

describe("containsNearbyDuplicate", () => {
  it("returns false for an empty array", () => {
    expect(containsNearbyDuplicate([], 1)).toBe(false);
  });

  it("returns false for a single-element array", () => {
    expect(containsNearbyDuplicate([10], 1)).toBe(false);
  });

  it("returns false when there are no duplicates", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 4], 2)).toBe(false);
  });

  it("returns true when a duplicate exists within distance k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it("returns true when duplicate distance is exactly k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  it("returns false when duplicate exists but distance is greater than k", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });

  it("returns false when k is zero", () => {
    expect(containsNearbyDuplicate([1, 1], 0)).toBe(false);
  });

  it("handles negative values", () => {
    expect(containsNearbyDuplicate([-1, -2, -3, -1], 3)).toBe(true);
  });

  it("handles zeros with nearby duplicate", () => {
    expect(containsNearbyDuplicate([0, 1, 0], 2)).toBe(true);
  });

  it("works with large values", () => {
    expect(
      containsNearbyDuplicate(
        [Number.MAX_SAFE_INTEGER, 5, Number.MAX_SAFE_INTEGER],
        2,
      ),
    ).toBe(true);
  });

  it("uses the closest duplicate pair when there are multiple occurrences", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  it("returns false for a large array without any duplicates", () => {
    const nums = Array.from({ length: 10_000 }, (_, i) => i);
    expect(containsNearbyDuplicate(nums, 9_999)).toBe(false);
  });
});
