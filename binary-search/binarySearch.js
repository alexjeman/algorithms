// O(log(n)) time O(1) space
function binarySearch(array, target) {
  // Declare left and right starting pointers
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {                         // Run while left pointer is not less or equal to right pointer, else we are done and exit with -1
    let middle = Math.floor((left + right) / 2);  // Declare middle pointer
    let potentialMatch = array[middle];
    if (target === potentialMatch) {              // Compare middle pointer <>= target and return or split array in half and keep iterating
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 8, 9, 12, 15, 20, 24, 26, 47], 8));
