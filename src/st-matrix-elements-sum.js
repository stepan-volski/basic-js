import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let blockedIndices = [];
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {

    matrix[i].forEach((el, index) => {
      if (!blockedIndices.includes(index)) {
        sum = sum + el;
      }
      if (el === 0) {
        blockedIndices.push(index);
      }
      console.log("ping!");
    });


  }
  return sum;

}
