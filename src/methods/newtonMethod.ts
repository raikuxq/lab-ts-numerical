import { toFixed } from "../helpers/toFixed";
import { FnParam } from "../types/FnParam";
import { ApproximationRange } from "../types/ApproximationRange";

export function newtonMethod(
  f: FnParam,
  fDerivative: FnParam,
  fDerivativeTwice: FnParam,
  range: ApproximationRange,
  min: number,
  max: number,
  epsilon: number
): void {
  let prevX: number;
  let x: number =
    f(range.from) * fDerivativeTwice(range.from) > 0 ? range.from : range.to;
  let i = 0;

  console.log(`{${i}} x = ${toFixed(x, 3)}`);

  do {
    prevX = x;
    x = prevX - f(x) / fDerivative(x);
    i++;
    console.log(`{${i}} x = ${toFixed(x, 3)}`);
  } while (epsilon < (max / (2 * min)) * Math.pow(x - prevX, 2));

  console.log(`Result: x = ${toFixed(x, 3)} \n`);
}
