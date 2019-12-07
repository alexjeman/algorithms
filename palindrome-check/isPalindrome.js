// O(n) time O(1) space
function isPalindrome(string) {
  // Declare left and right pointers
  left = 0;
  right = string.length - 1;
  // Run while left pointer < right pointer, exit if returning false if pointer targets are not equal
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

console.log(isPalindrome("kayaky"));
