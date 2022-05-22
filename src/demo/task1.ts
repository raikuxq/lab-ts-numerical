import { bisectionMethod } from "../methods/bisectionMethod";

export const task1 = (): void => {
  function fn(x: number) {
    return x * x - 20 * Math.sin(x);
  }

  console.log("\nRoot 1:");
  bisectionMethod(fn, { from: -0.5, to: 0.5 }, 0.001);

  console.log("\nRoot 2");
  bisectionMethod(fn, { from: 2, to: 3 }, 0.001);
};
