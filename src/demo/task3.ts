import { newtonMethod } from "../methods/newtonMethod";

export const task3 = (): void => {
  function fn(x: number) {
    return 0.5 * Math.exp(-Math.sqrt(x)) - 0.2 * Math.sqrt(Math.pow(x, 3)) + 2;
  }

  function fnDerivative(x: number) {
    return (
      -0.3 * (Math.sqrt(Math.pow(x, 3)) / x) -
      (0.25 * Math.exp(-Math.sqrt(x))) / Math.sqrt(x)
    );
  }

  function fnDerivativeTwice(x: number) {
    return (
      (0.125 * Math.exp(-Math.sqrt(x))) / x -
      (0.15 * Math.sqrt(Math.pow(x, 3))) / Math.pow(x, 2) +
      (0.125 * Math.exp(-Math.sqrt(x))) / Math.pow(x, 3 / 2)
    );
  }

  const epsilon = 0.001;
  const min = 0.617;
  const max = 0.069;
  const range = {
    from: 4,
    to: 5,
  };

  newtonMethod(fn, fnDerivative, fnDerivativeTwice, range, min, max, epsilon);
};
