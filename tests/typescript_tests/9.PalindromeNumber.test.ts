import { isPalindrome } from "../../typescript/9.PalindromeNumber";

const testCase1 = 112211;
const testCase2 = 1331;
const testCase3 = 12345;
const testCase4 = 7788822223333;

describe("isPalindrome() should correctly identify palindromes", () => {
  it("should return True if number is a palindrome", () => {
    expect(isPalindrome(testCase1)).toBeTruthy();
    expect(isPalindrome(testCase2)).toBeTruthy();
  });
  it("should return False if number is not a palindrome", () => {
    expect(isPalindrome(testCase3)).toBeFalsy();
    expect(isPalindrome(testCase4)).toBeFalsy();
  });
});
