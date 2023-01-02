import { baseURL, restricted } from './constants.js';
import sum, { minus } from './functions.js'
// import * as func from './functions.js'; // tips: to use this way, remove `default` in functions.js

console.log('sum:' ,sum(2, 5));
console.log('minus:', minus(6, 15));

console.log('baseURL:', baseURL)
console.log('minSerial:', restricted.minSerial)
console.log('maxSerial:', restricted.maxSerial)

/* console.log(func.sum(2, 5));
console.log(func.minus(6, 10)) */