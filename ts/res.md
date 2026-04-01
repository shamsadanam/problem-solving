Here’s a clean TypeScript pattern to “count up” at the index for each letter (a=0, b=1, …, z=25):

```ts
function countLetters(input: string): number[] {
  const counts = new Array(26).fill(0);

  for (const ch of input.toLowerCase()) {
    const code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      counts[code - 97]++;
    }
  }

  return counts;
}

// Example
const counts = countLetters("abcaZ!");
// counts[0] === 2 (a), counts[1] === 1 (b), counts[2] === 1 (c), counts[25] === 1 (z)
```

If instead you already have a letter and want to increment its slot directly, just do:

```ts
const counts = new Array(26).fill(0);
const letter = "d";
counts[letter.toLowerCase().charCodeAt(0) - 97] += 1;
```

Tell me if you want it to ignore non-letters, be case-sensitive, or work with arrays of letters instead of a string.
