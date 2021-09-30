import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
 * 
 * 
 */
//  input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
//  output: [1, 2, 3, 4, 5]



export default function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }


  let arr2 = [];
  let commands = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  for (let i = 0; i < arr.length; i++) {

    if (!commands.includes(arr[i])) {
      arr2.push(arr[i]);

    } else {
      switch (arr[i]) {
        case "--discard-next":
          if (typeof arr[i + 1] === "number") {
            i++;
          }
          break;

        case "--discard-prev":
          if (typeof arr[i - 1] === "number") {
            delete arr2[i - 1];
          }
          break;

        case "--double-next":
          if (typeof arr[i + 1] === "number") {
            arr2.push(arr[i + 1]);
          }
          break;

        case "--double-prev":
          if (typeof arr[i - 1] === "number" && arr[i - 2] != "--discard-next") {
            arr2.push(arr[i - 1]);
          }
          break;

        default:
          break;
      }
    }
  }

  return arr2.filter(el => (typeof el === "number"));
}
