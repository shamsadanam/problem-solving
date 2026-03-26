// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

import { logObject } from "./utils";

// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   const obj: { [key: number]: number } = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in obj && Math.abs(obj[nums[i]] - i) <= k) return true;
//     else obj[nums[i]] = i;
//   }

//   return false;
// }

// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   const obj: { [key: number]: number } = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (i > k) {
//       delete obj[nums[i - k - 1]];
//     }
//     if (nums[i] in obj) return true;

//     obj[nums[i]] = i;
//   }
//   return false;
// }

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;

    window.add(nums[i]);

    if (i >= k) {
      window.delete(nums[i - k]);
    }
  }
  return false;
}

export default containsNearbyDuplicate;

console.log(containsNearbyDuplicate([1, 2], 0));
