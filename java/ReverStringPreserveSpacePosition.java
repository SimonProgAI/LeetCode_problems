

public class ReverStringPreserveSpacePosition {

    public static String reveStringPreserveSpace(String s) {
        // Split input String s into an array strArr 
        String[] strArr = s.split("");

        // Initialize resultArr of strArr.length to store the results.
        String[] resultArr = new String[strArr.length];

        // 1st pass: push only the spaces into resultArr
        for (int i = 0; i < strArr.length; i++) {
            if (strArr[i].equals(" ")) {// i scans for " " (spaces). If the value of strArr[i] is a space, it is then copied to resultArr[i]. 
                resultArr[i] = strArr[i];
            } else {// Not strictly necessary. It's there to help visualize the shape of resultArr after the first pass.

                resultArr[i] = "_";
            }
        }
        // System.out.println(Arrays.toString(resultArr));

        // 2nd pass: push the inverted values of strArr to resultArr using two-pointer technique
        int left = resultArr.length - 1; // left pointer is the writter. Values will be written at its current index if certain conditions are met.
        for (int right = 0; right < strArr.length; right++) {  // right is the scanner.
            if (!strArr[right].equals(" ")) {// right scans for non-space characters 

                if (resultArr[left].equals(" ")) { // left skips over spaces.
                    left--;
                }

                resultArr[left] = strArr[right]; // if non-space is found, left writes it to resultArr in the inverted position (at the end)
                left--;
            }

        }

        // System.out.println(Arrays.toString(resultArr));
        String resultStr = String.join("",resultArr);
        return resultStr;
    }

    public static void main(String[] args) {
        String testCase1 = "I'll be back.";
        String testCase2 = "intern at geeks";
        String output = reveStringPreserveSpace(testCase1);
        String output2 = reveStringPreserveSpace(testCase2);
        System.out.println(output + output2);
    }
}
