import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {

  let arr = [];
  let docIndex = 0;

  arr = email.split('');
  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "@") {
          docIndex = i;
          break;
      }
  }

  return email.slice(email.length - docIndex);

}
