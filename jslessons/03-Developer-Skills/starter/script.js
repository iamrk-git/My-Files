// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [2, -3, -9, 3, 6];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (t1, t2) {
//   const temp = t1.concat(t2);
//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };
// const amplitude = console.log(calcTempAmplitude(temp1, temp2));
// console.log(amplitude);
const arr = [17, 21, 23];

const printForecast = function (Array) {
  let str = "";
  for (let i = 0; i < Array.length; i++) {
    str = str + `The temperature is ${Array[i]}ºC in ${i + 1} days `;
  }
  console.log(str);
};
console.log(printForecast(arr));
// console.log(weather);
