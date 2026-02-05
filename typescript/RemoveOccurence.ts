/* 
https://www.geeksforgeeks.org/dsa/remove-element/
*/

const numsArr: number[] = [3, 2, 2, 3, 4, 3, 5];
const targetNums: number = 3;

function RemoveOccurence(nums: number[], target: number): number {
  let left: number = 0;
  let count: number = 0;

  for (let right = 0; right < nums.length; right++) {
    console.log("ITERATION ", count++);
    console.log(`left[${left}] = `, nums[left]);
    console.log(`right[${right}] = `, nums[right]);
    console.log("nums array:", nums);
    console.log("_______________");

    if (nums[right] !== target) {
      
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}

console.log(RemoveOccurence(numsArr, targetNums))
