import { log } from "./utils/log";

function twoSum(nums: number[], target: number): number[] {
  const len = nums.length;

  if (len < 2) return [];

  for (let i = 0, j = i + 1; i < len; j++) {
    if (j >= len) {
      i++;
      j = i + 1;
    }
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
  return [];
}

log(twoSum, [2, 7, 11, 15], 9);
log(twoSum, [2, 7, 11, 15], 26);
log(twoSum, [3, 2, 4], 6);
log(twoSum, [3, 3], 6);
