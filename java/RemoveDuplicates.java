import java.util.Arrays;

public class RemoveDuplicates {

    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int left = 0;
        for (int right = 1; right < nums.length; right++) {
            if (nums[left] != nums[right]) {
                left++;
                nums[left] = nums[right];
            }
        }
        return left + 1;
    }

    public static void main(String[] args) {
        int[] numsArr = {1, 1, 2, 2, 3, 4, 4, 5}; //I'm using the curly bracket to initialize the array with values
        int length = removeDuplicates(numsArr);
        
        System.out.println("Length: "+length);
        System.out.println("Unique array: " + Arrays.toString(Arrays.copyOf(numsArr,length)));


    }
}
