# Tree shaking bug with spread operator

[![Greenkeeper badge](https://badges.greenkeeper.io/BetterCallSky/ts-webpack-treeshaking-bug.svg)](https://greenkeeper.io/)


Below code includes the whole RXJS library
```ts
import * as Rx from 'rxjs/operators';

const foo = (...args: any[]) => Rx.concat(...args);
console.log(foo);
```

Below code is ok, tree shaking only used methods
```ts
import * as Rx from 'rxjs/operators';

const foo2 = (...args: any[]) => Rx.concat(args);
console.log(foo2);

```

Usage:   
Edit main.ts  
Run  

```
yarn run build

```