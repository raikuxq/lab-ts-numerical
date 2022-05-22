import { FnParam } from "../types/FnParam";
import { simpsonMethod } from "../methods/simpsonMethod";

export const task7 = (): void => {
  const f: FnParam = (x: number) => Math.log(x * x + 1) / x;

  simpsonMethod({ from: 0.8, to: 1.6 }, 8, f);
};
