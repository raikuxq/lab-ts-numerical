import { FnParam } from "../types/FnParam";
import { ApproximationRange } from "../types/ApproximationRange";
import { toFixed } from "../helpers/toFixed";

export const trapezoidalMethod = (
  range: ApproximationRange,
  count: number,
  step: number,
  f: FnParam
): void => {
  const fxArr = new Array(count + 1);
  const results = [];

  let xi = range.from;
  for (let i = 0; i <= count; i++) {
    fxArr[i] = Math.round((f(xi) + Number.EPSILON) * 1000) / 1000;

    results.push(`i: ${i}, Xi: ${xi}, Yi: ${fxArr[i]}`);
    xi = Math.round((xi + step + Number.EPSILON) * 1000) / 1000;
  }

  const calcIntegral = (): number => {
    let integral = fxArr[0] + fxArr[fxArr.length - 1];
    let sum = 0;
    for (let i = 1; i < fxArr.length - 1; i++) {
      sum += fxArr[i];
    }
    integral = (step / 2) * (integral + 2 * sum);

    return integral;
  };

  console.log("\n Iterations:", results);
  console.log("\n Result:", toFixed(calcIntegral(), 5));
};
