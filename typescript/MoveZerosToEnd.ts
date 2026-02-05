/* 
https://www.geeksforgeeks.org/dsa/move-zeroes-end-array/

Given an array of integers arr[], move all zeros to the END of the array 
while maintaining the relative order of all non-zero elements*/

// Naive Approach - USING TEMPORARY ARRAY - O(n) Time and Space

const testArr: number[] = [1, 2, 0, 4, 3, 0, 5, 0];
const target: number = 0;

function moveTargetNumToEnd(numsArr: number[], targetNum: number): number[] {
  let tempArr: number[] = [];

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] !== targetNum) {
      tempArr.push(numsArr[i]);
    }
  }

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] === targetNum) {
      tempArr.push(numsArr[i]);
    }
  }

  return tempArr;
}

// console.log(moveTargetNumToEnd(testArr, target));

// Better approach - TWO TRAVERSALS
/* 
    First traversal: Shift non-zero elements
        - Maintain the COUNT (init 0) of NON-ZERO ELEMENTS
        - COUNT keeps track of where the NEXT NON-ZERO ELEMENT should be placed in the array 
        - if element is NON-ZERO, place it at arr[COUNT] & COUNT += 1
        
    */
/* 
    Second traversal: Fill remaining positions with zeros 
        - COUNT will store the index where the FIRST ZERO should be placed.
        - iterate from COUNT to the END OF ARRAY and fill all indices with 0.
    */
function moveTargetNumToEnd2T(numsArr: number[], targetNum: number): number[] {
  let left: number = 0; // The left pointer is the writter.
  // left is the numsArr[index] where non-targetNum elements will be written.
  // During iteration, if left = 1, the non-targetNum element will be written at numsArr[1]

  // 1st Traversal of numsArr:
  for (let right = 0; right < numsArr.length; right++) {
    // The right pointer scans the array for non-targetNum elements.
    // It scans each elements, never skips, and increments on each iteration.
    if (numsArr[right] !== targetNum) {
      numsArr[left] = numsArr[right];
      left++;

      // 'left' increments by 1 each time 'right' finds a non-TargetNum element.
      //  On next iteration, 'left' will equal 1 so numsArr[right] (a non-targetNums element) will be written to numsArr[1]
      //  On next iterantion, 'left' will equal 2 so numsArr[right] will be written to numsArr[2]
      //  etc.
    }
  }
  // 2nd Traversal of numsArr:
  // All non-targetNum elements are compacted at the start of the array
  while (left < numsArr.length) {
    // 'left' gives us the starting index at which remaining targetNums will be written
    numsArr[left] = targetNum;
    left++;
  }

  // the function return the modified numsArr;

  return numsArr;
}

// Expected Approach - One Traversal
/* The idea is similar to the previous approach where we took a pointer, 
  say count to track where the next non-zero element should be placed. 
  However, on encountering a non-zero element, instead of directly placing 
  the non-zero element at arr[count], we will swap the non-zero element with arr[count]. 
  This will ensure that if there is any zero present at arr[count], 
  it is pushed towards the end of array and is not overwritten. */
function moveTargetNumToEnd1T(numsArr: number[], targetNum: number): number[] {
  let left: number = 0;

  for(let right = 0; right < numsArr.length; right ++){
    if(numsArr[right] !== targetNum){
      let temp: number = numsArr[left];
      numsArr[left] = numsArr[right];
      numsArr[right] = temp;
      left ++
    }
  }
  return numsArr;
}
console.log(moveTargetNumToEnd1T(testArr, target));


/* let arr: number[] = [47,19]

let temp = arr[0] //temp holds the value 47
arr[0] = arr[1] // now arr[0] holds the value 19, not 47
arr[1] = temp // now arr[1] holds the value 47, not 19
console.log(arr)
 */