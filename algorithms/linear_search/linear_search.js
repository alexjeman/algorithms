// Time O(n) Space O(1)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {  // Compare each element against target and return "i" if found or -1 if not found.
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2, 5, 6, 8, 9, 12, 15, 20, 24, 26, 47], 15));
