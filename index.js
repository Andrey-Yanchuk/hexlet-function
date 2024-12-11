// index.js
import {
  sayPrimeOrNot,
  expect,
  average,
  convert,
  run,
  takeOldest,
  getChildren,
} from "./exported-functions.js";
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
/*-----------------------------------------------------*/
console.log(convert()); //[]
console.log(convert([1993, 3, 24])); //[ 'Wed Mar 24 1993'
console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18])); //[ 'Wed Mar 24 1993', 'Tue Aug 12 1997', 'Thu Oct 18 2001' ]
/*-----------------------------------------------------*/
console.log(run("")); // null
console.log(run("cb")); // null
console.log(run("power")); // rewo
console.log(run("hexlet")); // telx
/*-----------------------------------------------------*/
const users = [
  { name: "Tirion", birthday: "Nov 19, 1988" },
  { name: "Sam", birthday: "Nov 22, 1999" },
  { name: "Rob", birthday: "Jan 11, 1975" },
  { name: "Sansa", birthday: "Mar 20, 2001" },
  { name: "Tisha", birthday: "Feb 27, 1992" },
  { name: "Chris", birthday: "Dec 25, 1995" },
];
const emptyUsers = [];
console.log(takeOldest(users));
console.log(takeOldest(users, 2));
console.log(takeOldest(emptyUsers));
/*-----------------------------------------------------*/
const usersList = [
  {
    name: "Tirion",
    children: [{ name: "Mira", birthday: "1983-03-23" }],
  },
  { name: "Bronn", children: [] },
  {
    name: "Sam",
    children: [
      { name: "Aria", birthday: "2012-11-03" },
      { name: "Keit", birthday: "1933-05-14" },
    ],
  },
  {
    name: "Rob",
    children: [{ name: "Tisha", birthday: "2012-11-03" }],
  },
];
console.log(getChildren(usersList));
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];
/*-----------------------------------------------------*/
