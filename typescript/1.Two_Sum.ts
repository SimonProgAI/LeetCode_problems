const arr1 = [1,2,3,4,5,6,7] 

function twoSum(nums: number[], target: number): number[] {
    let left: number = 0;
    let right: number = 1;
    let sum: number = 0;
    let returnedArr: number[];
    
    while(sum !== target){
        sum = nums[left] + nums[right];
        if(sum===target){
            returnedArr = [left, right]
            return returnedArr
        }else if(sum<target){
            left++
            right++
        }
    }
    return []
}
console.log(twoSum(arr1, 13))