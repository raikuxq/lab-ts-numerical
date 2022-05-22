import { FnParam } from "../types/FnParam";
import { interpolationMethod } from "../methods/interpolationMethod";

export const task5 = (): void => {
  const entryData = [
    { x: 1.8, y: 0.107 },
    { x: 1.9, y: 0.027 },
    { x: 2.0, y: -0.051 },
    { x: 2.1, y: -0.127 },
  ];

  const fnMaxDerivative: FnParam = (x: number) => Math.cos(x) - Math.exp(-x);
  const entryY = 0;

  interpolationMethod(entryY, entryData, fnMaxDerivative);
};
