// Array
const uglyArray = [[1, 5, 7, [3, [9]]], 6];

function arrayFlatten(items) {  
  // Variable to store normalized array
  const flatArray = [];
  items.forEach(item => {       // forEach loop to check if it is array of number
    if (Array.isArray(item)) {  // If array ...spread and call function in recursion
      flatArray.push(...arrayFlatten(item));
    } else {
      flatArray.push(item);     // Construct new array, push items and destructured items from previous if
    }
  });
  return flatArray;
}

console.log(arrayFlatten(uglyArray));

// Built in method
console.log(uglyArray.flat(Infinity))
