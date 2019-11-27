// O(n)
// Replace comments for index version
function twoNumberSum(array, targetSum) {
  const previousValues = {};
  let i = 0;
  while (i < array.length) {
    const potentialMatch = targetSum - array[i]; // const previousIndex = previousValues[potentialMatch];
    if (previousValues[potentialMatch]) {        // replace with if (previousIndex != null)
      return [potentialMatch, array[i]];         // replace with return [previousIndex, i];
    } else {
      previousValues[array[i]] = true;           // replace true with i
    }
    i++;
  }
  return [];
}

module.exports = twoNumberSum;
