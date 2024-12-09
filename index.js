// index.js
import { sayPrimeOrNot, expect, average } from "./exported-functions.js";
/*-----------------------------------------------------*/
sayPrimeOrNot(5);
sayPrimeOrNot(4);
sayPrimeOrNot(37);
sayPrimeOrNot(3);
/*-----------------------------------------------------*/
console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null
/*-----------------------------------------------------*/
console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
