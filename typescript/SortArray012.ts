/* 
https://www.geeksforgeeks.org/dsa/sort-an-array-of-0s-1s-and-2s/

Sort an array of 0s, 1s and 2s - Dutch National Flag Problem

    Given an array arr[] consisting of only 0s, 1s, and 2s. 
    The objective is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

    This problem is the same as the famous "Dutch National Flag problem". 
    The problem was proposed by Edsger Dijkstra. The problem is as follows:

    Given n balls of colour red, white or blue arranged in a line in random order. 
    You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, 
    with the order of the colours being red, white and blue 
    (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

    Examples:

    Input: arr[] = [0, 1, 2, 0, 1, 2]
    Output: [0, 0, 1, 1, 2, 2]
    Explanation: [0, 0, 1, 1, 2, 2] has all 0s first, then all 1s and all 2s in last.

    Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
    Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
    Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.
*/

const numArrTest: number[] = [0, 1, 2, 0, 1, 2];

/* 
1.[Naive Approach] Sorting - O(n × log(n)) Time and O(1) Space
    The naive solution is to simply sort the array using a standard sorting algorithm or sort library function. 
    This will simply place all the 0s first, then all 1s and 2s at last.
*/
function sortArrNaive(numArr: number[]): number[] {
  numArr.sort((a, b) => a - b);

  return numArr;
}

/* 
2.[Better Approach] Counting 0s, 1s and 2s - Two Pass
    A better solution is to traverse the array once and count number of 0s, 1s and 2s, say c0, c1 and c2 respectively. 
    Now traverse the array again, put c0 (count of 0s) 0s first, then c1 1s and finally c2 2s. 
    This solution works in O(n) time, but it is not stable and requires two traversals of the array.
*/
function sortArrBetter(numArr: number[]): number[] {
  let c0: number = 0;
  let c1: number = 0;
  let c2: number = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 0) {
      c0++;
    } else if (numArr[i] === 1) {
      c1++;
    } else if (numArr[i] === 2) {
      c2++;
    }
  }
  /* console.log(`c0: ${c0}`);
  console.log(`c1: ${c1}`);
  console.log(`c2: ${c2}`); */
  let idx: number = 0;

  for (let i = 0; i < c0; i++) numArr[idx++] = 0;

  for (let i = 0; i < c1; i++) numArr[idx++] = 1;

  for (let i = 0; i < c2; i++) numArr[idx++] = 2;

  return numArr;
}
/* 
3.[Expected Approach] Dutch National Flag Algorithm - One Pass - O(n) Time and O(1) Space
    The problem is similar to "Segregate 0s and 1s in an array". 
    The idea is to sort the array of size n using three pointers: 
    lo = 0, mid = 0 and hi = n - 1 such that the array is divided into 4 parts -

    arr[0 .. lo - 1] → All 0s
    arr[lo .. mid - 1] → All 1s
    arr[mid .. hi] → Unprocessed elements (unknown)
    arr[hi + 1 .. n - 1] → All 2s
    Here,

    lo is the index where the next 0 should be placed,
    mid is the current element being checked,
    hi is the index where the next 2 should be placed.
*/

function sortArrExpected(numArr: number[]): number[] {
  
  let lo: number = 0;
  let mid: number = 0;
  let hi: number = numArr.length - 1;

  while (mid <= hi) {
    if (numArr[mid] === 0) {
      let temp: number = numArr[lo];
      numArr[lo] = numArr[mid];
      numArr[mid] = temp;
      lo++;
      mid++;
    } else if (numArr[mid] === 1) {
        mid++
    }else if (numArr[mid] === 2) {
        let temp: number = numArr[mid];
        numArr[mid] = numArr[hi];
        numArr[hi] = temp;
        hi--;
    }
  }

  return numArr;
}

// console.log(sortArrNaive(numArrTest));
// console.log(sortArrBetter(numArrTest));
console.log(sortArrExpected(numArrTest))
