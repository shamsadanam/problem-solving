import { describe, expect, it } from "vitest";
import isAnagram from "./isAnagram";

describe("isAnagram", () => {
  it("returns true for basic anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("returns false for non-anagrams with same length", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("returns false when lengths differ", () => {
    expect(isAnagram("abc", "ab")).toBe(false);
  });

  it("handles empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  it("treats uppercase and lowercase as equivalent", () => {
    expect(isAnagram("Listen", "Silent")).toBe(true);
  });

  it("handles repeated characters correctly", () => {
    expect(isAnagram("aacc", "ccac")).toBe(false);
    expect(isAnagram("aacc", "ccaa")).toBe(true);
  });

  it("works with single-character inputs", () => {
    expect(isAnagram("a", "a")).toBe(true);
    expect(isAnagram("a", "b")).toBe(false);
  });

  it("handles longer strings with many duplicates", () => {
    expect(isAnagram("bbbbccccaaaa", "abcabcabcabc")).toBe(true);
  });
});
