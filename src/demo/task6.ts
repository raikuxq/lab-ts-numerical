import { trapezoidalMethod } from "../methods/trapezoidalMethod";
import { FnParam } from "../types/FnParam";

export const task6 = (): void => {
  const f: FnParam = (x: number) => 1 / Math.sqrt(3 * x * x - 1);

  trapezoidalMethod({ from: 1.4, to: 2.1 }, 7, 0.1, f);
};
