function twoNumberSum(arr, target) {
  arr.sort();
  let targetSum = target;
  let right = arr.length - 1;
  let left = 0;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [arr[left], arr[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}

let array = [8, 2, 5, 7, 6, 3, 7, 8, 2, -4, -6, 1];
let num = 3;

console.log(twoNumberSum(array, num));
