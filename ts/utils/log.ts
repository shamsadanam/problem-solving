export const log = <TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
  ...args: TArgs
): void => {
  console.log(fn(...args));
};
