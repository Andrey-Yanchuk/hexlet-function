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
/*-----------------------------------------------------*/
export const convert = (...dateArr) => {
  if (dateArr.length === 0) return [];
  const result = [];
  for (const [year, month, day] of dateArr) {
    const formattedDate = new Date(year, month - 1, day).toDateString();
    result.push(formattedDate);
  }
  return result;
};
/*-----------------------------------------------------*/
export const run = (str) => {
  const takeLast = (str, n) => {
    if (str.length < n) return null;
    return str.slice(-n).split("").reverse().join("");
  };
  return takeLast(str, 4);
};
console.log(run("")); // null
console.log(run("cb")); // null
console.log(run("power")); // rewo
console.log(run("hexlet")); // telx
/*-----------------------------------------------------*/
export const takeOldest = (usersList, n = 1) => {
  if (usersList.length === 0) return null;
  // return _.sortBy(usersList, (user) => Date.parse(user.birthday)).slice(0, n);
  const sortedUsers = [...usersList].sort((a, b) => {
    if (Date.parse(a.birthday) === Date.parse(b.birthday)) {
      return 0;
    }
    return Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1;
  });
  return sortedUsers.slice(0, n);
};
/*-----------------------------------------------------*/
