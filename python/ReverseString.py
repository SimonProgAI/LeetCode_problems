s = ["h", "e", "l", "l", "o"]

def reverseString(self, s: list[str]) -> None:
    left = 0
    right = len(s) - 1
    while left < right:
        tempChar = s[left]
        s[left] = s[right]
        left += 1
        s[right] = tempChar
        right -= 1


print("before", s)
reverseString(s)
print("after", s)
