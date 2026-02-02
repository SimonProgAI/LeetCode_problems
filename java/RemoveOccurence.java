
public class RemoveOccurence {

    public static int removeOccurence(int[] nums, int target) {
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != target) {
                nums[left] = nums[right];
                left ++;
            }
        }
        return left;
    }

    public static void main(String[] args) {
        int[] numsArr = {3, 2, 2, 3, 4, 3, 5};
        int targetNum = 3;
        int newLength = removeOccurence(numsArr, targetNum);
        System.out.println("New length: " + newLength);

        for(int i = 0; i < newLength; i++){
            System.out.print(numsArr[i] + " ");
        }

    }
}
