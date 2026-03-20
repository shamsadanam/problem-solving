import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// This collects lines from the input
const lines: string[] = [];
rl.on("line", (line) => {
  lines.push(line);
});

// This runs once the input is finished
rl.on("close", () => {
  solve(lines);
});

function solve(input: string[]) {
  // Your logic goes here!
  console.log("Input received:", input);

  // Example: Convert first line to numbers
  // const nums = input[0].split(' ').map(Number);
}
