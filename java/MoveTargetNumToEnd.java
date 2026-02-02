import java.util.*;
public class MoveTargetNumToEnd {

    /* public static ArrayList<Integer> moveTargetNumToEnd(int[] numsArr, int targetNum) {
        ArrayList<Integer> tempList = new ArrayList<>();

        for (int num : numsArr) {
            if (num != targetNum) {
                tempList.add(num);
            }

        }

        for (int num : numsArr) {
            if (num == targetNum) {
                tempList.add(num);
            }

        }

        return tempList;

    } */
    /* public static int[] moveTargetNumToEnd2T(int[] numsArr, int targetNum) {
        int left = 0;

        for (int right = 0; right < numsArr.length; right++) {
            if (numsArr[right] != targetNum) {
                numsArr[left] = numsArr[right];
                left++;
            }
        }

        while (left < numsArr.length) {
            numsArr[left] = targetNum;
            left++;
        }
        return numsArr;
    } */
    public static int[] moveTargetNumToEnd1T(int [] numsArr, int targetNum){
        int left = 0;
        for(int right = 0; right < numsArr.length; right++){
            if(numsArr[right] != targetNum){
                int temp = numsArr[left];
                numsArr[left] = numsArr[right];
                numsArr[right] = temp;
                left ++;
            }
        }
        return numsArr;
    }
    public static void main(String[] args) {
        int[] testCase = {1, 2, 0, 4, 3, 0, 5, 0};
        int target = 0;
        // ArrayList<Integer> output = moveTargetNumToEnd(testCase, target);
        // System.out.println(output.toString());
        // int [] output2T = moveTargetNumToEnd2T(testCase, target);
        // System.out.println(Arrays.toString(output2T));
        int [] output1T = moveTargetNumToEnd1T(testCase, target);
        System.out.println(Arrays.toString(output1T));
    }
}
