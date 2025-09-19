/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character. */

const s = ["h", "e", "l", "l", "o"];
function reverseString(s: string[]): void {
  let left: number = 0;
  let right: number = s.length - 1;
  while (left < right) {
    let tempChar: string = s[left];
    s[left] = s[right];
    left++;
    s[right] = tempChar;
    right--;
  }
}
console.log(s);
reverseString(s);
console.log(s);
