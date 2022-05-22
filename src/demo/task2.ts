import { FnParam } from "../types/FnParam";
import { iterationMethod } from "../methods/iterationMethod";

export const task2 = (): void => {
  const fn: FnParam = (x: number): number => {
    return 0.5 * Math.exp(-Math.sqrt(x)) - 0.2 * Math.sqrt(Math.pow(x, 3)) + 2;
  };

  const fnDerivative: FnParam = (x: number): number => {
    return (
      -0.3 * (Math.sqrt(Math.pow(x, 3)) / x) -
      (0.25 * Math.exp(-Math.sqrt(x))) / Math.sqrt(x)
    );
  };

  iterationMethod(fn, fnDerivative, 4, 0.094, 0.001);
};
