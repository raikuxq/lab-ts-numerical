import { toFixed } from "../helpers/toFixed";
import { FnParam } from "../types/FnParam";
import { ApproximationRange } from "../types/ApproximationRange";

export function bisectionMethod(
  f: FnParam,
  range: ApproximationRange,
  epsilon: number
): void {
  let a = range.from;
  let b = range.to;
  let x = 0;
  let i = 0;
  let fX = 0;
  let fA = f(a);

  const hasRoots = f(a) * f(b) < 0;
  if (!hasRoots) {
    console.log("No roots found");
    return;
  }

  while (b - a > epsilon) {
    x = (a + b) / 2;
    fX = f(x);

    console.log(
      `{${i + 1}} x = ${toFixed(x, 3)} on [${toFixed(a, 3)}; ${toFixed(b, 3)}]`
    );

    if (fX === 0) {
      console.log(`x = ${x} (root)`);
      i++;
      break;
    } else if (fA * fX < 0) {
      b = x;
    } else {
      a = x;
      fA = f(a);
    }
    i++;
  }

  if (fX !== 0) {
    console.log(`x = ${toFixed(x, 3)} with e = ${epsilon}`);
  }
}
