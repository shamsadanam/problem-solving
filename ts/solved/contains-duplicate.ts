const containsDuplicate = (nums: number[]): boolean => {
  // let seen: { [key: number]: number } = {};
  // for (let i = 0; i < nums.length; i++) {
  // if (!(nums[i] in seen)) seen[nums[i]] = i;
  // else return true;

  // }

  let seen = new Set<number>();

  for (let n = 0; n < nums.length; n++) {
    if (seen.has(nums[n])) return true;
    seen.add(nums[n]);
  }

  return false;
};

export default containsDuplicate;
