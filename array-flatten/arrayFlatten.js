// Array
const uglyArray = [[1, 5, 7, [3, [9]]], 6];

function arrayFlatten(items) {
  // Variable to store normalized array
  const flatArray = [];
  // forEach loop to check if it is array of number
  items.forEach(item => {
    // If array ...spread and call function in recursion
    if (Array.isArray(item)) {
      flatArray.push(...arrayFlatten(item));
    } else {
      // Construct new array, push items and destructured items from previous if
      flatArray.push(item);
    }
  });
  return flatArray;
}

console.log(arrayFlatten(uglyArray));
