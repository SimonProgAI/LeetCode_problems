

public class CheckPalindrome {

    public static void main(String[] args) {
        String word = "laval";
        String word2 = "montréal";
        System.out.println(checkIfPalindrome(word));
        System.out.println(checkIfPalindrome(word2));

    }

    public static boolean checkIfPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if(s.charAt(left) != s.charAt(right)){
                return false;
            }else{
                left ++;
                right --;
            }
            
        }
        return true;
    };
}
