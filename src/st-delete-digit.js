import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(num) {

  let arr = [];

  for (let i = 1; i <= num.toString().length; i++) {
      let str = num.toString().slice(0, i - 1) + num.toString().slice(i, num.toString().length);
      arr.push(Number(str));
  }

  arr.sort((a, b) => b - a);

  console.log(arr);

  return arr[0];

}
