import { FnParam } from "../types/FnParam";
import { ApproximationRange } from "../types/ApproximationRange";
import { toFixed } from "../helpers/toFixed";

export const simpsonMethod = (
  range: ApproximationRange,
  count: number,
  f: FnParam
): void => {
  const step = (range.to - range.from) / count;
  const fxArr = new Array(count + 1);
  const results = [];

  let xi = range.from;
  for (let i = 0; i <= count; i++) {
    fxArr[i] = Math.round((f(xi) + Number.EPSILON) * 100000) / 100000;
    if (i % 2 === 0) {
      results.push(`i: ${i}, x: ${xi}, ------------ , y: ${fxArr[i]}`);
    } else {
      results.push(`i: ${i}, x: ${xi}, y: ${fxArr[i]}, ------------ `);
    }
    xi = Math.round((xi + step + Number.EPSILON) * 1000) / 1000;
  }

  const calcIntegral = (): number => {
    let sum = 0;
    for (let i = 1; i <= count - 1; i += 2) {
      sum += fxArr[i] * 4;
    }
    for (let i = 2; i <= count - 2; i += 2) {
      sum += fxArr[i] * 2;
    }

    return (step / 3) * (fxArr[0] + fxArr[count] + sum);
  };

  console.log("\n Iterations:", results);
  console.log("\n Result:", toFixed(calcIntegral(), 5));
};
