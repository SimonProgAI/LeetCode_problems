/* [Naive Approach] - Using a new String - O(n) Time and O(n) Space
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
    if(strArr[i] === " "){
      resultArr[i] = strArr[i]
    }/* else { // Not necessary. It's there for visualization.
      resultArr[i] = "_"
    }
    // Also not necessary and only there for visualization 
    //console.log(resultArr); */
  }

  let left: number = resultArr.length - 1;
  for(let right = 0; right < strArr.length; right ++){
    //Check that strArr[right] is not a space. 
    if(strArr[right] !== " "){
      
      // if resultArr[left] is a space, left decrements and nothing is written there. (In other words, it's skipped over)
      if(resultArr[left] === " "){
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
console.log(reverseStrPreserveSpc(testString1));
console.log(reverseStrPreserveSpc(testString2));
