
import java.util.Arrays;

public class ReverseString {

    public static String[] reverseString(String[] stringArr) {
        int left = 0;
        int right = stringArr.length - 1;

        while (left < right) {
            String temp = stringArr[left];
            stringArr[left] = stringArr[right];
            left++;
            stringArr[right] = temp;
            right--;
        }

        return stringArr;
    }

    public static void main(String[] args) {
        String[] s = {"h", "e", "l", "l", "o"};
        System.out.println(Arrays.toString(s));
        String[] output = reverseString(s);
        System.out.println(Arrays.toString(output));
    }
}
