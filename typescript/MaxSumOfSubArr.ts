/* 
    Given an array of integers arr[] and an integer k, find the maximum possible sum among all contiguous subarrays of size exactly k.
    A subarray is a sequence of consecutive elements from the original array. Return the maximum sum that can be obtained from any such subarray of length k.

    Examples: 

    Input  : arr[] = [100, 200, 300, 400],  k = 2
    Output : 700
    Explanation: We get maximum sum by adding subarray [300,400] of size 2

    Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4 
    Output : 39
    Explanation: We get maximum sum by adding subarray [4, 2, 10, 23] of size 4.

    Input  : arr[] = [2, 3], k = 1
    Output : 3
    Explanation: The subarrays of size 1 are [2] and [3]. The maximum sum is 3.
*/

/* 
    [Naive Approach] Fixed-Size Window Brute Force - O(n × k) time and O(1) space
    The idea is to iterate over all possible subarrays of size k and calculate their sums one by one. 
    For each subarray, compare its sum with the current maximum and update accordingly.
*/
//Turns out that this is the expected approach
function maxSubArrSumNaive(numsArr: number[], k: number): number {
  let left: number = 0;
  let right: number = 0;
  let windowSum: number = 0;
  let maxSum: number = -Infinity;

  while (right < numsArr.length) {
    windowSum += numsArr[right];
    if (right - left + 1 < k) {
      right++;
      continue;
    }

    if(windowSum>maxSum){
        maxSum = windowSum;
    }

    windowSum -= numsArr[left];
    left++;
    right++;
  }

  return maxSum; 
}

/* 
[Better Approach - 1] Using Prefix Sum - O(n) Time and O(n) Space
The idea is to precompute the prefix sum array where each element at index i stores the sum of elements from index 0 to i-1. 
Using this, we can compute the sum of any subarray in constant time O(1) using the difference of two prefix values. 
This eliminates the need to iterate over each subarray element repeatedly.
*/
function maxSubArrBetter_1(numsArr: number[]){

}

const subArrTest: number[] = [100, 21, 3, 48, 157, 80, 7, 8, 9, 101, -100];
const kSize: number = 4;


//console.log(calHiSumSubArr(subArrTest, 2));
console.log(maxSubArrSumNaive(subArrTest, kSize));
