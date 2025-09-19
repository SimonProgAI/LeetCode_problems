"use strict";
const s = ["h", "e", "l", "l", "o"];
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let tempChar = s[left];
        s[left++] = s[right];
        s[right--] = tempChar;
    }
}
;
reverseString(s);
console.log(s);
//# sourceMappingURL=ReverseString.js.map