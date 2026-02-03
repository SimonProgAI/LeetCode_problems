/* 1.[Naive Approach] - Using a new String - O(n) Time and O(n) Space
The idea is to create a string to store results. 

Mark the space position of the given string in this string 

Start Inserting the characters from the input string into the result string in reverse order. 

While inserting the character check if the result string already has a space at index ‘j’ or not. 
If it does, we copy the character to the next position. */

const testString1: string = "I'll be back.";
const testString2: string = "hello World.";

function reverseStrPreserveSpc(str: string) {
  // Split the input string into an array strArr.
  let strArr: string[] = str.split("");
  // Create an array of the same length as strArr that will store the result
  let resultArr: string[] = new Array(strArr.length);

  // Iterate over resultArr to mark the space positions from strArr.
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      resultArr[i] = strArr[i];
    } /* else { // Not necessary. It's there for visualization.
      resultArr[i] = "_"
    }
    // Also not necessary and only there for visualization 
    //console.log(resultArr); */
  }

  let left: number = resultArr.length - 1;
  for (let right = 0; right < strArr.length; right++) {
    //Check that strArr[right] is not a space.
    if (strArr[right] !== " ") {
      // if resultArr[left] is a space, left decrements and nothing is written there. (In other words, it's skipped over)
      if (resultArr[left] === " ") {
        left--;
      }
      // if strArr[right] is not a space, its value is written at resultArr[left] and left decrements
      resultArr[left] = strArr[right];
      left--;
    }
    // console.log(resultArr)
  }

  const resultStr = resultArr.join("");
  return resultStr;
}

/* 2.[Expected Approach] - Using two Pointers - O(n) Time and O(1) Space
The idea is to use two pointers pointing at start and end of the string. 
If character at start or end is space, we move the pointer pointing to the space to the next position 
and swap only if both pointers point to a character.  */

function preserveSpaces2Ps(s: string): string {
  // convert string s to strArr for iteration purposes
  let strArr: string[] = s.split("");

  let left: number = 0;
  let right: number = strArr.length - 1;
  while (left < right) {
    // if pointer points to space, then no swap.
    if (strArr[left] === " ") {
      left++;
    } else if (strArr[right] === " ") {
      right--;
    } else {
      let temp: string = strArr[left];
      strArr[left] = strArr[right];
      left++;
      strArr[right] = temp;
      right--;
    }
  }
  console.log(strArr);

  return strArr.join("");
}

// console.log(reverseStrPreserveSpc(testString1));
// console.log(reverseStrPreserveSpc(testString2));
console.log(preserveSpaces2Ps(testString1));
console.log(preserveSpaces2Ps(testString2));