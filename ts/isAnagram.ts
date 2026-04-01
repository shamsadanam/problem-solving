function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const getLetterCount = (input: string): number[] => {
    const lcInput = input.toLowerCase();
    let count: number[] = Array(26).fill(0);
    for (let i = 0; i < lcInput.length; i++) {
      const code = lcInput[i].charCodeAt(0) - 97;
      count[code]++;
    }
    return count;
  };

  const sCount = getLetterCount(s);
  const tCount = getLetterCount(t);

  for (let j = 0; j < sCount.length; j++) {
    if (sCount[j] !== tCount[j]) return false;
  }

  return true;
}

console.log(isAnagram("cat", "cac"));

export default isAnagram;
