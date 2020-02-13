// O(n) time O(1) space
function isPalindrome(string) {
  left = 0;                     // Declare left and right pointers
  right = string.length - 1;
  while (left < right) {        // Run while left pointer < right pointer, exit if returning false if pointer targets are not equal
    if (string[left] !== string[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

console.log(isPalindrome("kayaky"));
