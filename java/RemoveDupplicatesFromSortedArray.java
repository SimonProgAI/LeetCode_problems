
import java.util.Arrays;

public class RemoveDupplicatesFromSortedArray {

    public static int[] removeDuplicates(int[] numsArr) {
        int left = 0;
        for (int right = 0; right < numsArr.length; right++) {
            if (numsArr[right] != numsArr[left]) {
                left++;
                numsArr[left] = numsArr[right];
            }
        }
        return Arrays.copyOf(numsArr, left + 1);
    }

    public static void main(String[] args) {
        int[] testCase = {1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 9, 9, 9, 9, 9};
        int[] output = removeDuplicates(testCase);
        System.out.println(Arrays.toString(output));
    }
}
