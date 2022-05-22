import { toFixed } from "../helpers/toFixed";

type FnParam3 = (n1: number, n2: number, n3: number) => number;

export function gaussSeidelMethod(
  f1: FnParam3,
  f2: FnParam3,
  f3: FnParam3,
  f4: FnParam3,
  startX1: number,
  startX2: number,
  startX3: number,
  startX4: number,
  epsilon: number
): void {
  function maximumOfAbs(
    absX1: number,
    absX2: number,
    absX3: number,
    absX4: number
  ) {
    return Math.max(Math.max(absX1, absX2), Math.max(absX3, absX4));
  }

  let i = 0;
  let x1 = startX1;
  let x2 = startX2;
  let x3 = startX3;
  let x4 = startX4;
  let prevX1 = x1;
  let prevX2 = x2;
  let prevX3 = x3;
  let prevX4 = x4;

  do {
    prevX1 = x1;
    prevX2 = x2;
    prevX3 = x3;
    prevX4 = x4;
    x1 = f1(prevX2, prevX3, prevX4);
    x2 = f2(x1, prevX3, prevX4);
    x3 = f3(x1, x2, prevX4);
    x4 = f4(x1, x2, x3);
    i++;
    console.log(`{${i}} x1 = ${toFixed(x1, 3)}`);
    console.log(`{${i}} x2 = ${toFixed(x2, 3)}`);
    console.log(`{${i}} x3 = ${toFixed(x3, 3)}`);
    console.log(`{${i}} x4 = ${toFixed(x4, 3)}`);
    console.log("\n");
  } while (
    maximumOfAbs(
      Math.abs(x1 - prevX1),
      Math.abs(x2 - prevX2),
      Math.abs(x3 - prevX3),
      Math.abs(x4 - prevX4)
    ) > epsilon
  );

  console.log("Result:");
  console.log(`x1 = ${toFixed(x1, 3)}`);
  console.log(`x2 = ${toFixed(x2, 3)}`);
  console.log(`x3 = ${toFixed(x3, 3)}`);
  console.log(`x4 = ${toFixed(x4, 3)}`);
}
