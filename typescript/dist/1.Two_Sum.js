"use strict";
const arr1 = [1, 2, 3, 4, 5, 6, 7];
function twoSum(nums, target) {
    let left = 0;
    let right = 1;
    let sum = 0;
    let returnedArr;
    while (sum !== target) {
        sum = nums[left] + nums[right];
        if (sum === target) {
            returnedArr = [left, right];
            return returnedArr;
        }
        else if (sum < target) {
            left++;
            right++;
        }
    }
    return [];
}
console.log(twoSum(arr1, 13));
//# sourceMappingURL=1.Two_Sum.js.map