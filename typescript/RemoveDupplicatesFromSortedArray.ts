/* 
https://www.geeksforgeeks.org/dsa/remove-duplicates-sorted-array/

Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements 
appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.

Note: The elements after the distinct ones can be in any order and hold any value, 
as they don't affect the result.

Examples: 

Input: arr[] = [2, 2, 2, 2, 2]
Output: [2]
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
Output: [1, 2, 3, 4, 5]

Input: arr[] = [1, 2, 3]
Output: [1, 2, 3]
Explanation : No change as all elements are distinct. */

const testCase: number[] = [1, 1,2, 2, 3, 4, 4, 4, 5, 5,6,6,7,8,9,9,9,9,9,9];

function removeDuplicates(numsArr: number[]): number[] {
  let left: number = 0;

  for (let right = 0; right < numsArr.length; right++) {
    if (numsArr[right] !== numsArr[left]) {
      left++;
      numsArr[left] = numsArr[right];
      //   console.log(numsArr[left]);
      //   console.log("left: ",left);
    }
  }

  return numsArr.slice(0, left + 1);
}

console.log(removeDuplicates(testCase));
