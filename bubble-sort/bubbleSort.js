// Time O(n^2) Space O(1)
function bubbleSort(array) {
  let len = array.length;
  let swapped;
  while (swapped !== false) {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  }
  return array;
}

console.log(bubbleSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 15, 20]));
