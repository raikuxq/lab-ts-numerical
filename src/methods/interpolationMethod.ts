import { FnParam } from "../types/FnParam";
import { XYPair } from "../types/XYPair";
import { memoizedFactorial } from "@raikuxq/alg-ds/lib/exports/algorithms";
import { toFixed } from "../helpers/toFixed";

export function interpolationMethod(
  y: number,
  pairs: Array<XYPair>,
  fMaxDerivative: FnParam
): void {
  const maxDerivative = () => {
    let max = pairs[0].x;
    for (let i = 0; i < pairs.length; i++) {
      const current = Math.abs(fMaxDerivative(pairs[i].x));
      if (max < current) max = current;
    }
    return max;
  };

  const measurement = (y = 0) => {
    let pValue = 1;
    for (let i = 0; i < pairs.length; i++) {
      pValue *= y - pairs[i].y;
    }
    return (
      (maxDerivative() / memoizedFactorial(pairs.length)) * Math.abs(pValue)
    );
  };

  const lagrange = (y: number) => {
    let lValue = 0;
    for (let i = 0; i < pairs.length; i++) {
      let pValue = 1;
      for (let j = 0; j < pairs.length; j++) {
        if (j !== i) {
          pValue *= (y - pairs[j].y) / (pairs[i].y - pairs[j].y);
        }
      }
      lValue += pValue * pairs[i].x;
    }

    console.log(`L(${y}) = x =  ${toFixed(lValue, 5)}`);
    console.log("Measurement:", measurement(y));
  };

  lagrange(y);
}
