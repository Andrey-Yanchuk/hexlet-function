// exported-functions.js
// import _ from "lodash";
// import example from "./example.json" assert { type: "json" };
// import { str } from "crc-32";
/*-----------------------------------------------------*/
export const primeNumber = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num); // Использование квадратного корня оптимизирует проверку, так как нет смысла проверять числа больше его.
  for (let i = 3; i <= sqrt; i += 2) {
    // Найден делитель больше двух, число не простое
    if (num % i === 0) return false;
  }
  return true;
};
export const sayPrimeOrNot = (num) => {
  if (primeNumber(num)) {
    console.log("yes");
  } else {
    console.log("no");
  }
};
/*-----------------------------------------------------*/
