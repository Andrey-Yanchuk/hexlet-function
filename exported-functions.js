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
export const getChildren = (usersList) => {
  return usersList.map(({ children }) => children).flat();
};
/*-----------------------------------------------------*/
export const getGirlFriends = (usersList) => {
  return usersList
    .map(({ friends }) => friends)
    .flat()
    .filter(({ gender }) => gender === "female");
};
/*-----------------------------------------------------*/
export const groupBy = (collection, nameProperty) => {
  return collection.reduce((acc, item) => {
    if (!acc[item[nameProperty]]) acc[item[nameProperty]] = [];
    acc[item[nameProperty]].push(item);
    return acc;
  }, {});
};
/*-----------------------------------------------------*/
export const getFreeDomainsCount = (emails) => {
  return emails
    .map((email) => {
      const [, domain] = email.split("@");
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      if (!acc[domain]) acc[domain] = 0;
      acc[domain] += 1;
      return acc;
    }, {});
};
const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com"];
/*-----------------------------------------------------*/
export const enlargeArrayImage = (twoDimensionalArr) => {
  return twoDimensionalArr
    .map((row) => [
      row.map((cell) => cell + cell),
      row.map((cell) => cell + cell),
    ])
    .flat();
};
/*-----------------------------------------------------*/
