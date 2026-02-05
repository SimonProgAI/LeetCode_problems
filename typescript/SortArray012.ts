/* 

https://www.geeksforgeeks.org/dsa/sort-an-array-of-0s-1s-and-2s/


Sort an array of 0s, 1s and 2s - Dutch National Flag Problem
Last Updated : 1 Aug, 2025
Given an array arr[] consisting of only 0s, 1s, and 2s. 
The objective is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

This problem is the same as the famous "Dutch National Flag problem". 
The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given n balls of colour red, white or blue arranged in a line in random order. 
You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, 
with the order of the colours being red, white and blue 
(i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: [0, 0, 1, 1, 2, 2] has all 0s first, then all 1s and all 2s in last.

Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} has all 0s first, then all 1s and all 2s in last.
*/

/* 
1.[Naive Approach] Sorting - O(n × log(n)) Time and O(1) Space
The naive solution is to simply sort the array using a standard sorting algorithm or sort library function. 
This will simply place all the 0s first, then all 1s and 2s at last.
*/

/* 
2.[Better Approach] Counting 0s, 1s and 2s - Two Pass
A better solution is to traverse the array once and count number of 0s, 1s and 2s, say c0, c1 and c2 respectively. 
Now traverse the array again, put c0 (count of 0s) 0s first, then c1 1s and finally c2 2s. 
This solution works in O(n) time, but it is not stable and requires two traversals of the array.
*/

/* 
3.[Better Approach] Counting 0s, 1s and 2s - Two Pass
A better solution is to traverse the array once and count number of 0s, 1s and 2s, say c0, c1 and c2 respectively. 
Now traverse the array again, put c0 (count of 0s) 0s first, then c1 1s and finally c2 2s. 
This solution works in O(n) time, but it is not stable and requires two traversals of the array.
*/