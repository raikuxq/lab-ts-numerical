Common numerical analysis methods. Written in TypeScript.

# Getting started

Clone this repository and install dependencies by using `yarn` command.

+ `yarn dev` - run in dev mode via nodemon (src/index.ts is an entrypoint)

+ `yarn build` - compile ts sources into js files

+ `yarn start` - build and run in production mode

+ `yarn lint` - lint check via eslint

+ `yarn lint:fix` - fix source files via eslint



# Navigation

+ [Bisection method](#bisection-method)
+ [Iterative method](#iterative-method)
+ [Newton method](#newton-method)
+ [Interpolation method](#interpolation-method)
+ [Trapezoidal method](#trapezoidal-method)
+ [Simpson method](#simpson-method)



## Bisection method

Params:

+ f: [FnParam](src/types/FnParam.ts) - f(x)
+ range: [ApproximationRange](src/types/ApproximationRange.ts) - initial approximation
+ epsilon: number - epsilon (e)

Example:

```ts
import { bisectionMethod } from "src/methods/bisectionMethod";

const fn: FnParam = (x: number): number => {
  return x * x - 20 * Math.sin(x);
}

bisectionMethod(fn, { from: 2, to: 3 }, 0.001);
```


## Iterative method

Params:

+ f: [FnParam](src/types/FnParam.ts) - f(x)
+ fDerivative: [FnParam](src/types/FnParam.ts) - f'(x)
+ xStart: number - initial approximation (x0) 
+ compression: number - compression criteria (q)
+ epsilon: number - epsilon (e)

Example:

```ts
import { iterationMethod } from "src/methods/iterationMethod";

const fn: FnParam = (x: number): number => {
  return 0.5 * Math.exp(-Math.sqrt(x)) - 0.2 * Math.sqrt(Math.pow(x, 3)) + 2;
};

const fnDerivative: FnParam = (x: number): number => {
  return (
    -0.3 * (Math.sqrt(Math.pow(x, 3)) / x) -
    (0.25 * Math.exp(-Math.sqrt(x))) / Math.sqrt(x)
  );
};

iterationMethod(fn, fnDerivative, 4, 0.094, 0.001);
```


## Newton method

Params:

+ f: [FnParam](src/types/FnParam.ts) - f(x)
+ fDerivative: [FnParam](src/types/FnParam.ts) - f'(x)
+ fDerivativeTwice: [FnParam](src/types/FnParam.ts) - f''(x)
+ range: [ApproximationRange](src/types/ApproximationRange.ts) - initial approximation 
+ min: number
+ max: number
+ epsilon: number - epsilon (e)

Example:

```ts
import { newtonMethod } from "src/methods/newtonMethod";

function fn(x: number) {
return 0.5 * Math.exp(-Math.sqrt(x)) - 0.2 * Math.sqrt(Math.pow(x, 3)) + 2;
}

function fnDerivative(x: number) {
return (
  -0.3 * (Math.sqrt(Math.pow(x, 3)) / x) -
  (0.25 * Math.exp(-Math.sqrt(x))) / Math.sqrt(x)
);
}

function fnDerivativeTwice(x: number) {
return (
  (0.125 * Math.exp(-Math.sqrt(x))) / x -
  (0.15 * Math.sqrt(Math.pow(x, 3))) / Math.pow(x, 2) +
  (0.125 * Math.exp(-Math.sqrt(x))) / Math.pow(x, 3 / 2)
);
}

const epsilon = 0.001;
const min = 0.617;
const max = 0.069;
const range = {
from: 4,
to: 5,
};

newtonMethod(fn, fnDerivative, fnDerivativeTwice, range, min, max, epsilon);

```

## Interpolation method

Params:

+ y: number
+ pairs: Array<[XYPair](src/types/XYPair.ts)> - entry {x;y} pairs 
+ fMaxDerivative: [FnParam](src/types/FnParam.ts) - f derivative n+1 times (example: n = 3, f''''(x))
Example:

```ts
import { interpolationMethod  } from "src/methods/interpolationMethod";

const entryData = [
  { x: 1.8, y: 0.107 },
  { x: 1.9, y: 0.027 },
  { x: 2.0, y: -0.051 },
  { x: 2.1, y: -0.127 },
];
const fnMaxDerivative: FnParam = (x: number) => Math.cos(x) - Math.exp(-x);
const entryY = 0;

interpolationMethod(entryY, entryData, fnMaxDerivative);
```

## Trapezoidal method

Params:

+ range: [ApproximationRange](src/types/ApproximationRange.ts) - initial approximation
+ count: number - N
+ step: number - lambda
+ f: [FnParam](src/types/FnParam.ts) - f(x)

Example:

```ts
import { trapezoidalMethod  } from "src/methods/trapezoidalMethod";

const f: FnParam = (x: number) => 1 / Math.sqrt(3 * x * x - 1);

trapezoidalMethod({ from: 1.4, to: 2.1 }, 7, 0.1, f);
```


## Simpson method


Params:

+ range: [ApproximationRange](src/types/ApproximationRange.ts) - initial approximation
+ count: number - N
+ f: [FnParam](src/types/FnParam.ts) - f(x)

Example:

```ts
import { simpsonMethod  } from "src/methods/simpsonMethod";

const f: FnParam = (x: number) => Math.log(x * x + 1) / x;

simpsonMethod({ from: 0.8, to: 1.6 }, 8, f);
```

