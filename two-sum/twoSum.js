// O(n)
function twoNumberSum(array, targetSum) {
  const previousValues = {};
  let i = 0;
  while (i < array.length) {
    const potentialMatch = targetSum - array[i];
    const previousIndex = previousValues[potentialMatch];
    if (previousIndex != null) {
      return [array[previousIndex], array[i]]; // remove "array[" "]" if you want to get index only
    } else {
      previousValues[array[i]] = i;
    }
    i++;
  }
  return [];
}

console.log(twoNumberSum([3, 5, 2, -4, 8, 11], 19));

module.exports = twoNumberSum;
