// O(n)
function twoNumberSum(array, targetSum) {
  const index = {};
  for (let i = 0; i < array.length; i++) {
    const possibleMatch = targetSum - array[i];
    const indexedMatch = index[possibleMatch];
    if (indexedMatch == null) {
      index[array[i]] = i;
    } else {
      return [array[indexedMatch], array[i]]; // remove "array[" "]" if you want to get index only
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, 2, -4, 8, 11], 19));

module.exports = twoNumberSum;
