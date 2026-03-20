export const limitter = (i: number, j: number): void => {
  console.log(i, j);
  if (i > 10 || j > 10) {
    throw new Error("i or j has exceeded the limit");
  }
};
