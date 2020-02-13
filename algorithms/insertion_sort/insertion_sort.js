function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j -= 1;
    }
  }
  return array;
}

console.log(insertionSort([24, 26, 47, 2, 5, 6, 8, 9, 12, 20, 15]));
