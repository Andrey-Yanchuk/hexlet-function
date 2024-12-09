// exported-functions.js
import _ from "lodash";
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
export const average = (...numbers) => {
  if (numbers.length === 0) return null;
  let result = 0;
  result += _.sum(numbers);
  // for (const num of numbers) {
  //     result += num;
  // }
  return result / numbers.length;
};
/*-----------------------------------------------------*/
// Функция сравнения переданного числа в аргумент функции expect и метода toBe или notToBe
export const expect = function (val) {
  return {
    toBe: function (compareVal) {
      if (val === compareVal) {
        return true; // Если значения равны, вернуть true
      }
      return { error: "Not Equal" }; // Возвратить объект ошибки
    },
    notToBe: function (compareVal) {
      if (val !== compareVal) {
        return true; // Если значения не равны, вернуть true
      }
      return { error: "Equal" }; // Возвратить объект ошибки
    },
  };
};
