import * as Rx from 'rxjs/operators';

const foo = (...args: any[]) => Rx.concat(...args);
console.log(foo);

// const foo2 = (args: any[]) => Rx.concat(args);
// console.log(foo2);
