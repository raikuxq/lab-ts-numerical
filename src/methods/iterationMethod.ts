import { toFixed } from "../helpers/toFixed";
import { FnParam } from "../types/FnParam";

export function iterationMethod(
  f: FnParam,
  fDerivative: FnParam,
  xStart: number,
  compression: number,
  epsilon: number
): void {
  function findPhi(x: number, lambda: number) {
    return x - lambda * f(x);
  }

  const exitVal = ((1 - compression) / compression) * epsilon;
  const lambda = 1 / fDerivative(xStart);

  let prevX;
  let x = xStart;
  let i = 0;

  console.log(`{${i}} x = ${toFixed(x, 3)}`);
  do {
    prevX = x;
    x = findPhi(prevX, lambda);
    i++;
    console.log(`{${i}} x = ${toFixed(x, 3)}`);
  } while (Math.abs(x - prevX) > exitVal);

  console.log(`Result: x = ${toFixed(x, 3)} \n`);
}
