/* 
Given a string S of size N consisting of the characters 0, 1 and 2, 
the task is to find the length of the smallest substring of string S that contains all the three characters 0, 1 and 2. 
If no such substring exists, then return -1.

Examples:

Input: S = "01212"
Output: 3
Explanation: The substring 012 is the smallest substring that contains the characters 0, 1 and 2.

Input:  S = "12121"
Output: -1
Explanation:  As the character 0 is not present in the string S, 
therefore no substring containing all the three characters 0, 1 and 2 exists. 
Hence, the answer is -1 in this case.

*/

/* 
[Approach - 2] Using a sliding window - O(n) Time and O(1) Space
Use two pointers (i and k) and a frequency array to track the count of '0', '1', and '2'. 
Expand the window by moving k, and when all three characters are present, 
shrink it from the left (i) to maintain the smallest valid substring. 
Return the minimum length found.
*/



function smallestWindowSubStr(s: string){
    const sArr = s.split('');
    console.log(s);
    console.log(sArr);
    let left = 0;
    // let right = 0;
    let freqArr: string[] = [];
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    for(let right = 0; right < sArr.length; right ++){
        if(sArr[right] === '0'){
            c0++;
        }else if (sArr[right] === '1'){
            c1++;
        }else if (sArr[right] === '2'){
            c2++;
        };
        if(c0 > 0 && c1 > 0 && c2 > 0){
           break;
        }

    }
    
    console.log("c0: ", c0, "c1: ", c1, "c2: ", c2);


}

const S1  = "001221";     // min window = 4
const S2  = "220100";     // min window = 4
const S3  = "10021";      // min window = 4
const S4  = "001210";     // min window = 4
const S5  = "220011";     // min window = 4

smallestWindowSubStr(S5);

