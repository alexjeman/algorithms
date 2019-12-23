// Time O(1) space O(n^2)
function selectionSort(array) {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let smallIndex = currentIndex;
    for (let i = currentIndex; i < array.length + 1; i++) {
      if (array[smallIndex] > array[i]) {
        smallIndex = i;
      }
    }
    let tmp = array[smallIndex];
    array[smallIndex] = array[currentIndex];
    array[currentIndex] = tmp;
    currentIndex += 1;
  }
  return array;
}

console.log(selectionSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 15, 20]));
