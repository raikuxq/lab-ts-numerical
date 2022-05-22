import { gaussSeidelMethod } from "../methods/gaussSeidelMethod";

export const task4 = (): void => {
  function f1(x2: number, x3: number, x4: number) {
    return 0.22 - 0.049 * x2 - 0.12 * x3 - 0.08 * x4;
  }

  function f2(x1: number, x3: number, x4: number) {
    return 0.374 - 0.053 * x1 - 0.107 * x3 - 0.114 * x4;
  }

  function f3(x1: number, x2: number, x4: number) {
    return 0.156 - 0.106 * x1 - 0.048 * x2 - 0.109 * x4;
  }

  function f4(x1: number, x2: number, x3: number) {
    return 0.104 - 0.069 * x1 - 0.097 * x2 - 0.075 * x3;
  }

  const x1 = 0.22;
  const x2 = 0.374;
  const x3 = 0.156;
  const x4 = 0.104;
  const epsilon = 0.001;

  gaussSeidelMethod(f1, f2, f3, f4, x1, x2, x3, x4, epsilon);
};
